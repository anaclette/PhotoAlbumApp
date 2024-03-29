import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import {randomIcon} from '../../utils/arrayUtils';
import {capitalizeFirstLetter, checkIndexIsEven} from '../../utils/stringUtils';
import {styles} from './albumItem.style';
import {customBorder} from '../../themes/globalStyles';

interface Props {
  album: {
    title: string;
  };
  index: number;
}

export const AlbumItem = ({album, index}: Props) => {
  const isEven = checkIndexIsEven(index);
  return (
    <View
      accessible={true}
      accessibilityLabel={`Album: ${album.title}`}
      style={[
        styles.container,
        !isEven && styles.shadowProp,
        customBorder(index),
      ]}>
      <View style={styles.pictureItem}>
        {isEven && (
          <Text style={styles.icon}>
            <Icon
              accessibilityRole="image"
              color={colors.purple}
              size={metrics.scale(20)}
              name={randomIcon()}
            />
          </Text>
        )}

        <Text style={styles.title}>{capitalizeFirstLetter(album.title)}</Text>
      </View>
    </View>
  );
};
