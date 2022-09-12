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
  Alert,
} from 'react-native';
import {capitalizeFirstLetter, wait} from '../../../utils/stringUtils';
import {RootStackParams} from '../../../navigation/StackNavigator';
import {styles} from './photoDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../../../themes/metrics';
import {colors} from '../../../themes/colors';
import Loader from '../../Loader';
import {copies} from '../../../utils/variables';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

export const PhotoDetail = ({route, navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const {title, thumbnailUrl} = route.params;

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <SafeAreaView style={styles.container}>
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
            <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
            <Animated.View
              style={{...styles.imageContainer, opacity: fadeAnim}}>
              <Pressable
                style={styles.previousArrowButton}
                onPress={() => Alert.alert('a la anterior!')}>
                <Icon
                  size={metrics.scale(15)}
                  name="arrow-back"
                  color={colors.purple}
                />
              </Pressable>
              <Image source={{uri: thumbnailUrl}} style={styles.image} />
              <Pressable
                style={styles.nextArrowButton}
                onPress={() => Alert.alert('a la siguiente!')}>
                <Icon
                  size={metrics.scale(15)}
                  name="arrow-forward"
                  color={colors.purple}
                />
              </Pressable>
            </Animated.View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};
