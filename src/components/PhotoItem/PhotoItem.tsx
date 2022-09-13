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
import {Photo} from '../../types/types';

interface Props extends StackScreenProps<RootStackParams> {
  photo: Photo;
  index: number;
}

export const PhotoItem = ({photo, index, navigation}: Props) => {
  const icon = useMemo(() => {
    return randomIcon();
  }, [photo]);
  return (
    <View key={index} style={styles.container}>
      <TouchableOpacity
        accessibilityRole="button"
        accessible={true}
        accessibilityLabel={`Photo: ${photo.title}`}
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
          accessibilityRole="image"
          color={colors.purple}
          name={`${icon}-outline`}
          size={metrics.scale(30)}
        />
        <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
      </TouchableOpacity>
    </View>
  );
};
