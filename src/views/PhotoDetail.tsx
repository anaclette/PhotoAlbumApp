import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button, Image} from 'react-native';
import {capitalizeFirstLetter} from '../utils/variables';
import {RootStackParams} from '../navigator/StackNavigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

const PhotoDetail = ({route, navigation}: Props) => {
  const {title, thumbnailUrl} = route.params;
  const insets = useSafeAreaInsets();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'peru',
  },
  title: {
    margin: 45,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default PhotoDetail;
