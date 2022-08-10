import React from 'react';
import {API_HOST, ENDPOINTS} from '../utils/variables';
import useFetch from '../utils/hooks/useFetch';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import AlbumItem from '../components/AlbumItem';

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
    <View style={styles.container}>
      <Text style={[styles.title, styles.shadowProp]}>Photo albums</Text>
      {response ? (
        <FlatList
          style={styles.list}
          data={response}
          renderItem={({item}) => <AlbumItem album={item} />}
        />
      ) : (
        <Text style={styles.text}>Photo album</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  title: {
    fontSize: 50,
    color: '#2e294e',
    letterSpacing: 1.2,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
  },
  shadowProp: {
    shadowColor: '#fff',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  list: {
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: '#2e294e',
  },
});

export default Albums;
