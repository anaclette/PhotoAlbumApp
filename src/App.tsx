import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {getPersistor, getStore} from './state/store';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './state/Auth';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {StackNavigator} from './navigation/StackNavigator';

const store = getStore();
const persistor = getPersistor();

const App = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <NavigationContainer>
    //       <StackNavigator />
    //     </NavigationContainer>
    //   </PersistGate>
    // </Provider>
    <AppState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
