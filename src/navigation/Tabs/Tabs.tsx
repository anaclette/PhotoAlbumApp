import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platform, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../../state/Auth';

import Albums from '../../views/Albums';
import Photos from '../../views/Photos';
import TabIcon from '../../components/TabIcon';
import Login from '../../views/Login';
import Home from '../../views/Home';
import {colors} from '../../themes/colors';
import {styles} from './tabs.style';
import {getIconName} from '../../utils/stringUtils';

export const Tabs = () => {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  const CustomTabs = createMaterialTopTabNavigator();
  const platformIsIos = Platform.OS === 'ios';

  const showTabs = () => {
    return (
      <>
        {isLoggedIn && (
          <>
            <CustomTabs.Screen name="Home" component={Home} />
            <CustomTabs.Screen name="Albums" component={Albums} />
            <CustomTabs.Screen name="Photos" component={Photos} />
          </>
        )}
        <CustomTabs.Screen name="Profile" component={Login} />
      </>
    );
  };

  return (
    <CustomTabs.Navigator
      tabBarPosition={platformIsIos ? 'bottom' : 'top'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const {label} = getIconName(route);
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={focused ? {selected: true} : {}}
              accessibilityLabel={label}>
              <TabIcon route={route} focused={focused} />
            </TouchableOpacity>
          );
        },
        tabBarStyle: !platformIsIos
          ? {
              height: insets.top + 90,
              backgroundColor: colors.blueBackground,
              elevation: 0,
            }
          : {
              height: insets.top + 70,
              backgroundColor: colors.blueBackground,
              borderTopColor: colors.white,
              borderTopWidth: 2,
            },
        tabBarLabelStyle: styles.label,
        tabBarPressColor: colors.palePink,
        tabBarIndicatorStyle: {
          backgroundColor: !platformIsIos
            ? colors.palePink
            : colors.transparent,
        },
        tabBarActiveTintColor: platformIsIos ? colors.white : colors.palePink,
        tabBarInactiveTintColor: colors.inactive,
      })}>
      {showTabs()}
    </CustomTabs.Navigator>
  );
};
