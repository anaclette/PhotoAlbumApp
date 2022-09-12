import React, {useCallback, useEffect} from 'react';
import {copies} from '../../utils/variables';
import {useSelector} from 'react-redux';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import PhotoItem from '../../components/PhotoItem';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import Loader from '../Loader';
import {styles} from './photos.style';
import {getPhotos} from '../../state/thunks';
import {Photo, RootState} from '../../types/types';

interface Props extends StackScreenProps<RootStackParams, 'Photos'> {}

export const Photos = ({navigation, route}: Props) => {
  const loading = useSelector((state: RootState) => state.photos.loading);
  const error = useSelector((state: RootState) => state.photos.error);
  const data = useSelector((state: RootState) => state.photos.data);

  useEffect(() => {
    getPhotos();
  }, []);

  const onRefresh = useCallback(() => {
    getPhotos();
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: Photo; index: number}) => {
      return (
        <PhotoItem
          navigation={navigation}
          index={index}
          photo={item}
          route={route}
        />
      );
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{copies.PHOTOS_TITLE}</Text>
      {loading ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            style={styles.list}
            data={data}
            keyExtractor={(_, index) => 'key' + index}
            renderItem={renderItem}
          />
        </>
      )}
    </SafeAreaView>
  );
};
