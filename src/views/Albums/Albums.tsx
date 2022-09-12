import React, {useCallback, useState, useEffect} from 'react';
import {copies} from '../../utils/variables';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import AlbumItem from '../../components/AlbumItem';
import Loader from '../Loader';
import {styles} from './albums.style';
import {wait} from '../../utils/stringUtils';
import {useSelector} from 'react-redux';
import {Album, RootState} from '../../types/types';
import {getAlbums} from '../../state/thunks';

export const Albums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const loading = useSelector((state: RootState) => state.albums.loading);
  const data = useSelector((state: RootState) => state.albums.data);
  const error = useSelector((state: RootState) => state.albums.error);

  const loader = loading || isLoading;

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    wait(2000).then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
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
      {loader ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
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
