// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet, View} from 'react-native';
import Albums from './views/Albums';
import Photos from './views/Photos';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Albums /> */}
      <Photos />
    </NavigationContainer>
  );
};

export default App;
