import React from 'react';
import {View, Text} from 'react-native';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import {styles} from './albumItem.style';

const AlbumItem = ({album}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{album.id}</Text>
      <Text style={styles.title}>{capitalizeFirstLetter(album.title)}</Text>
    </View>
  );
};

export default AlbumItem;
