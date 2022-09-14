import React, {useCallback, useEffect, useState} from 'react';
import {copies} from '../../utils/variables';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import PhotoItem from '../../components/PhotoItem';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import Loader from '../Loader';
import {styles} from './photos.style';
import {getPhotos} from '../../state/thunks';
import {Photo} from '../../types/types';
import {wait} from '../../utils/stringUtils';
import {useAppDispatch, useAppSelector} from '../../state/hooks';

interface Props extends StackScreenProps<RootStackParams, 'Photos'> {}

export const Photos = ({navigation, route}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const loading = useAppSelector(state => state.photos.loading);
  const error = useAppSelector(state => state.photos.error);
  const data = useAppSelector(state => state.photos.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    wait(2000).then(() => setIsLoading(false));
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
      {isLoading ? (
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
