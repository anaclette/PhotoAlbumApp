import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './state/store';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {StackNavigator} from './navigation/StackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
