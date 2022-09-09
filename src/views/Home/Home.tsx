import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Pressable, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {copies} from '../../utils/variables';
import {styles} from './home.style';
import {RootStackParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams> {}

export const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        accessibilityRole="tab"
        accessible={true}
        accessibilityLabel="Photos"
        style={styles.button}
        onPress={() =>
          navigation.navigate('Photos', {
            id: 1,
            name: 'Photos',
          })
        }>
        <Text style={styles.buttonText}>{copies.PHOTOS_TITLE}</Text>
      </Pressable>

      <Pressable
        accessibilityRole="tab"
        accessible={true}
        accessibilityLabel="Albums"
        style={styles.button}
        onPress={() =>
          navigation.navigate('Albums', {
            id: 2,
            name: 'Albums',
          })
        }>
        <Text style={styles.buttonText}>{copies.ALBUMS_TITLE}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
