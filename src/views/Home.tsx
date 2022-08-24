import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

interface Props extends StackScreenProps<any, any> {}

export const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Button
        title="Photos"
        onPress={() =>
          navigation.navigate('Photos', {
            id: 1,
            name: 'Photos',
          })
        }
      />

      <Button
        title="Albums"
        onPress={() =>
          navigation.navigate('Albums', {
            id: 2,
            name: 'Albums',
          })
        }
      />
    </SafeAreaView>
  );
};
