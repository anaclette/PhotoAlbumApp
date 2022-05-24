import React from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import {capitalizeFirstLetter} from '../utils/variables';

const AlbumList = ({albums}) => (
  <View style={styles.list}>
    <FlatList
      data={albums}
      renderItem={({item}) => (
        <Text style={styles.item}>{capitalizeFirstLetter(item.title)}</Text>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingTop: 70,
  },
  item: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default AlbumList;
