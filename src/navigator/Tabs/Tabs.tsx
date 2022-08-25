import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Albums from '../../views/Albums/Albums';
import Photos from '../../views/Photos/Photos';
import {Platform} from 'react-native';
import TabIcon from '../../components/TabIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../../state/Auth';
import {Login} from '../../views/Login/Login';
import {Home} from '../../views/Home/Home';

interface Props {
  height: number;
  loggedIn: boolean;
}

export const Tabs = () => {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return Platform.OS === 'ios' ? (
    <TabsIOS height={insets.top * 2.5} loggedIn={isLoggedIn} />
  ) : (
    <TabsAndroid height={insets.top + 90} loggedIn={isLoggedIn} />
  );
};

const TabsAndroid = ({height, loggedIn}: Props) => {
  return (
    <TopTabAndroid.Navigator
      sceneContainerStyle={{backgroundColor: '#fafafa'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <TabIcon route={route} focused={focused} />;
        },
        tabBarStyle: {
          height: height,
          backgroundColor: '#fafafa',
          borderTopColor: 'deeppink',
          borderTopWidth: 2,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          borderBottomColor: 'yellow',
        },
        tabBarPressColor: 'purple',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: 'deeppink'},
        tabBarActiveTintColor: 'deeppink',
        tabBarInactiveTintColor: '#9899a6',
      })}>
      {loggedIn && (
        <>
          <TopTabAndroid.Screen name="Home" component={Home} />
          <TopTabAndroid.Screen name="Albums" component={Albums} />
          <TopTabAndroid.Screen name="Photos" component={Photos} />
        </>
      )}
      <TopTabAndroid.Screen name="Profile" component={Login} />
    </TopTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TopTabAndroid = createMaterialTopTabNavigator();

const TabsIOS = ({height, loggedIn}: Props) => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'black'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <TabIcon isIOS route={route} focused={focused} />;
        },
        tabBarActiveTintColor: '#fafafa',
        tabBarInactiveTintColor: '#9899a6',
        tabBarLabelStyle: {fontSize: 15},
        tabBarStyle: {
          height: height,
          backgroundColor: '#2f4858',
          borderTopColor: '#fafafa',
          borderTopWidth: 2,
        },
      })}>
      {loggedIn && (
        <>
          <BottomTabIOS.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <BottomTabIOS.Screen
            options={{headerShown: false}}
            name="Albums"
            component={Albums}
          />
          <BottomTabIOS.Screen
            options={{headerShown: false}}
            name="Photos"
            component={Photos}
          />
        </>
      )}
      <BottomTabIOS.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Login}
      />
    </BottomTabIOS.Navigator>
  );
};
