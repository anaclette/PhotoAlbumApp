import React from 'react';
import {StyleSheet, View} from 'react-native';
import Albums from './views/Albums';
import Photos from './views/Photos';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Albums /> */}
      <Photos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbb891',
  },
});

export default App;
