import React, {useCallback, useState, useEffect} from 'react';
import {copies} from '../../utils/variables';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import AlbumItem from '../../components/AlbumItem';
import Loader from '../Loader';
import {styles} from './albums.style';
import {Album} from '../../types/types';
import {getAlbums} from '../../state/thunks';
import {useAppDispatch, useAppSelector} from '../../state/hooks';

export const Albums = () => {
  const loading = useAppSelector(state => state.albums.loading);
  const data = useAppSelector(state => state.albums.data);
  const error = useAppSelector(state => state.albums.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  const onRefresh = useCallback(() => {
    getAlbums();
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: Album; index: number}) => {
      return <AlbumItem index={index} album={item} />;
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.shadowProp]}>
        {copies.ALBUMS_TITLE}
      </Text>
      {loading ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            contentContainerStyle={styles.contentContainerStyle}
            numColumns={2}
            data={data}
            renderItem={renderItem}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
