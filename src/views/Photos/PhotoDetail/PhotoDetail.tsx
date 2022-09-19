import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
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

  const currentPhoto = photos[currentPhotoIndex];

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
              style={styles.previousArrowButton}
              disabled={currentPhotoIndex === 0}
              onPress={() =>
                setCurrentPhotoIndex(
                  prevCurrentPhotoIndex => prevCurrentPhotoIndex - 1,
                )
              }>
              <Icon
                size={metrics.scale(15)}
                name="arrow-back"
                color={colors.purple}
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
              style={styles.nextArrowButton}
              disabled={currentPhotoIndex === photos.length - 1}
              onPress={() =>
                setCurrentPhotoIndex(
                  prevCurrentPhotoIndex => prevCurrentPhotoIndex + 1,
                )
              }>
              <Icon
                size={metrics.scale(15)}
                name="arrow-forward"
                color={colors.purple}
              />
            </Pressable>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
