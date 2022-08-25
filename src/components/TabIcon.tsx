import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getIconName} from '../utils/stringUtils';

interface IconProps {
  route: RouteProp<ParamListBase>;
  focused: boolean;
  isIOS?: boolean;
}

const TabIcon = ({route, focused, isIOS}: IconProps) => {
  const iconName = getIconName(route);
  return (
    <Icon
      name={iconName}
      size={40}
      color={focused && isIOS ? '#fafafa' : focused && !isIOS ? '#900' : 'gray'}
    />
  );
};

export default TabIcon;
