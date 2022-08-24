import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {capitalizeFirstLetter} from '../utils/variables';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

const PhotoDetail = ({route, navigation}: Props) => {
  const {id, albumId, title} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Button title="Back" onPress={() => navigation.pop()} />
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default PhotoDetail;
