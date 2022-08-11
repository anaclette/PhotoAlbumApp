import React from 'react';
import {API_HOST, ENDPOINTS} from '../utils/variables';
import useFetch from '../utils/hooks/useFetch';
import {Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import PhotoItem from '../components/PhotoItem';

const Albums = () => {
  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.PHOTOS}`,
  );

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }
  if (error) {
    return <Text style={styles.text}>{`Oops, ${JSON.stringify(error)}`}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photos</Text>
      {response ? (
        <FlatList
          style={styles.list}
          data={response}
          renderItem={({item}) => <PhotoItem photo={item} />}
        />
      ) : (
        <Text style={styles.text}>Photos</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#495159',
  },
  title: {
    fontSize: 50,
    color: '#93b7be',
    letterSpacing: 1.2,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
  },
  list: {
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: '#93b7be',
  },
});

export default Albums;
