import React, {useCallback, useState} from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import useFetch from '../../utils/hooks/useFetch';
import AlbumItem from '../../components/AlbumItem';
import Loader from '../Loader';
import {styles} from './albums.style';
import {wait} from '../../utils/stringUtils';

export const Albums = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.ALBUMS}`,
  );
  const loader = loading || isLoading;

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    wait(2000).then(() => setIsLoading(false));
  }, []);

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
            data={response}
            renderItem={({item, index}) => (
              <AlbumItem index={index} album={item} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
