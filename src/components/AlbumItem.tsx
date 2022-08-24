import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {capitalizeFirstLetter} from '../utils/variables';

const AlbumItem = ({album}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{album.id}</Text>
      <Text style={styles.title}>{capitalizeFirstLetter(album.title)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'row',
    marginHorizontal: 45,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#5d675b',
  },

  id: {
    fontWeight: 'bold',
    color: '#2e294e',
    marginRight: 15,
  },
});

export default AlbumItem;
