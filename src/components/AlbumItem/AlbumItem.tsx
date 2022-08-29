import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import {randomIcon} from '../../utils/arrayUtils';
import {capitalizeFirstLetter, checkIndexIsEven} from '../../utils/stringUtils';
import {styles} from './albumItem.style';
import {customBorder} from '../../themes/globalStyles';

const AlbumItem = ({album, index}: any) => {
  const isEven = checkIndexIsEven(index);
  return (
    <View
      style={[
        styles.container,
        !isEven && styles.shadowProp,
        customBorder(index),
      ]}>
      <View style={styles.pictureItem}>
        {isEven && (
          <Text style={styles.icon}>
            <Icon
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

export default AlbumItem;
