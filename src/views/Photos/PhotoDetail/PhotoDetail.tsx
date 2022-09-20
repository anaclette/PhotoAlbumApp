import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
  Animated,
} from 'react-native';
import {capitalizeFirstLetter, wait} from '../../../utils/stringUtils';
import {RootStackParams} from '../../../navigation/StackNavigator';
import {styles} from './photoDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../../../themes/metrics';
import {colors} from '../../../themes/colors';
import Loader from '../../Loader';
import {copies} from '../../../utils/variables';
import {useAppSelector} from '../../../state/hooks';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

export const PhotoDetail = ({route, navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const photos = useAppSelector(state => state.photos.data);
  const {index} = route.params;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(index);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  const currentPhoto = useMemo(() => {
    return photos[currentPhotoIndex];
  }, [currentPhotoIndex]);

  const onNextPress = useCallback(
    () =>
      setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex - 1),
    [currentPhotoIndex],
  );

  const onPreviousPress = useCallback(
    () =>
      setCurrentPhotoIndex(prevCurrentPhotoIndex => prevCurrentPhotoIndex + 1),
    [currentPhotoIndex],
  );

  const disablePrevious = currentPhotoIndex === 0;
  const disableNext = currentPhotoIndex === photos.length - 1;

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Pressable
          accessible={true}
          accessibilityLabel={copies.ACCESSIBILITY_LABEL.BACK}
          accessibilityHint={copies.ACCESSIBILITY_LABEL.BACK_HINT}
          style={styles.backButton}
          onPress={() => navigation.pop()}>
          <Icon
            accessibilityRole="image"
            size={metrics.scale(25)}
            name="arrow-back-circle-outline"
            color={colors.purple}
          />
        </Pressable>

        {refreshing ? (
          <Loader />
        ) : (
          <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Pressable
              android_ripple={{color: colors.gray, borderless: true}}
              style={[styles.previousArrowButton, styles.arrowButton]}
              disabled={disablePrevious}
              onPress={onNextPress}>
              <Icon
                size={metrics.scale(25)}
                name="arrow-back"
                color={disablePrevious ? colors.gray : colors.purple}
              />
            </Pressable>
            <Text style={styles.title}>
              {capitalizeFirstLetter(currentPhoto.title)}
            </Text>
            <Animated.View
              style={{...styles.imageContainer, opacity: fadeAnim}}>
              <Image
                source={{uri: currentPhoto.thumbnailUrl}}
                style={styles.image}
              />
            </Animated.View>
            <Pressable
              android_ripple={{color: colors.gray, borderless: true}}
              style={[styles.nextArrowButton, styles.arrowButton]}
              disabled={disableNext}
              onPress={onPreviousPress}>
              <Icon
                size={metrics.scale(25)}
                name="arrow-forward"
                color={disableNext ? colors.gray : colors.purple}
              />
            </Pressable>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
