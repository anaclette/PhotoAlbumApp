import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {randomIcon} from '../../utils/arrayUtils';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import {styles} from './photoItem.style';

const PhotoItem = ({photo}: any) => {
  const icon = useMemo(() => {
    return randomIcon();
  }, [photo]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
        <Text>
          <Icon color={'#93b7be'} name={`${icon}-outline`} size={30} />
        </Text>
      </View>
    </>
  );
};

export default PhotoItem;
