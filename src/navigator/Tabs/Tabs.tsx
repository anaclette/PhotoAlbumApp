import React, {useContext} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Albums from '../../views/Albums/Albums';
import Photos from '../../views/Photos/Photos';
import {Platform} from 'react-native';
import TabIcon from '../../components/TabIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../../state/Auth';
import {Login} from '../../views/Login/Login';
import {Home} from '../../views/Home/Home';
import {colors} from '../../themes/colors';
import {styles} from './tabs.style';

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
          return <TabIcon route={route} focused={focused} />;
        },
        tabBarStyle: !platformIsIos
          ? {
              height: insets.top + 90,
              backgroundColor: colors.blueBackground,
              elevation: 0,
            }
          : {
              height: insets.top * 2.3,
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
