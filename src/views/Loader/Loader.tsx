import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../themes/colors';
import {styles} from './loader.style';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.lightLoader} />
    </View>
  );
};
