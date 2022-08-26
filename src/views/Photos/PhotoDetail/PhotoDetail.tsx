import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button, Image} from 'react-native';
import {capitalizeFirstLetter} from '../../../utils/stringUtils';
import {RootStackParams} from '../../../navigator/StackNavigator';
import {styles} from './photoDetail.style';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

const PhotoDetail = ({route, navigation}: Props) => {
  const {title, thumbnailUrl} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Button title="Back" onPress={() => navigation.pop()} />
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
        <Image source={{uri: thumbnailUrl}} style={styles.image} />
      </SafeAreaView>
    </>
  );
};

export default PhotoDetail;
