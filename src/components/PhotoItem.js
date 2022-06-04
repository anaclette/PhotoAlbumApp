import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {capitalizeFirstLetter} from '../utils/variables';

const PhotoItem = ({photo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: '#f1fffa',
  },
});

export default PhotoItem;
