import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {randomIcon} from '../../utils/arrayUtils';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import {styles} from './photoItem.style';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';

interface Props extends StackScreenProps<RootStackParams> {
  photo: {title: string};
  index: number;
}

export const PhotoItem = ({photo, index, navigation}: Props) => {
  const icon = useMemo(() => {
    return randomIcon();
  }, [photo]);
  return (
    <View key={index} style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('PhotoDetail', {
            id: photo['id'],
            albumId: photo['albumId'],
            title: photo['title'],
            url: photo['url'],
            thumbnailUrl: photo['thumbnailUrl'],
          })
        }>
        <Icon
          color={colors.purple}
          name={`${icon}-outline`}
          size={metrics.scale(30)}
        />
        <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
      </TouchableOpacity>
    </View>
  );
};
