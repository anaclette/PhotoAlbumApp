import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconProps {
  route: RouteProp<ParamListBase>;
  focused: boolean;
  isIOS?: boolean;
}

const TabIcon = ({route, focused, isIOS}: IconProps) => {
  let iconName: string = '';
  switch (route.name) {
    case 'Albums':
      iconName = 'camera-outline';
      break;

    case 'Photos':
      iconName = 'images-outline';
      break;

    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
  }
  return (
    <Icon
      name={iconName}
      size={40}
      color={focused && isIOS ? '#fafafa' : focused && !isIOS ? '#900' : 'gray'}
    />
  );
};

export default TabIcon;
