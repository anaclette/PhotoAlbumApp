import React from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import useFetch from '../../utils/hooks/useFetch';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import AlbumItem from '../../components/AlbumItem/AlbumItem';
import {styles} from './albums.style';
import {Loader} from '../Loader/Loader';

const Albums = () => {
  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.ALBUMS}`,
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <View style={styles.list}>
          <Text style={[styles.title, styles.shadowProp]}>
            {copies.ALBUMS_TITLE}
          </Text>

          <FlatList
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

export default Albums;
