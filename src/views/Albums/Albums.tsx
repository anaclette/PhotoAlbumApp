import React from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import useFetch from '../../utils/hooks/useFetch';
import {Text, FlatList, SafeAreaView} from 'react-native';
import AlbumItem from '../../components/AlbumItem/AlbumItem';
import {styles} from './albums.style';

const Albums = () => {
  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.ALBUMS}`,
  );

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }
  if (error) {
    return <Text style={styles.text}>{`Oops, ${JSON.stringify(error)}`}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.shadowProp]}>
        {copies.ALBUMS_TITLE}
      </Text>
      <FlatList
        style={styles.list}
        data={response}
        renderItem={({item}) => <AlbumItem album={item} />}
      />
    </SafeAreaView>
  );
};

export default Albums;
