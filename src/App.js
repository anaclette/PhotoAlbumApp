import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import useFetch from './utils/hooks/useFetch';
import AlbumList from './components/AlbumList';
import {API_HOST, ENDPOINTS} from './utils/variables';

const App = () => {
  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.ALBUMS}`,
    {
      query: {
        page: 1,
      },
    },
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }
  return (
    <View style={styles.container}>
      {response ? (
        <AlbumList albums={response} />
      ) : (
        <Text style={styles.text}>Photo album</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peru',
  },
  text: {
    fontSize: 10,
  },
});

export default App;
