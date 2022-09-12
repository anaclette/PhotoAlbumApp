import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';
import PhotoDetail from '../views/Photos/PhotoDetail';
import {Albums, Photo} from '../types/types';

export type RootStackParams = {
  Photos: Photo[];
  Albums: Albums;
  Tabs: () => JSX.Element;
  PhotoDetail: Photo;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        headerShown: false,
        headerStyle: {
          elevation: 0, // android no gray line
          shadowColor: 'transparent', // ios no gray line
        },
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="PhotoDetail" component={PhotoDetail} />
    </Stack.Navigator>
  );
};
