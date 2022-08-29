import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {randomIcon} from '../../utils/arrayUtils';
import {capitalizeFirstLetter} from '../../utils/stringUtils';
import {styles} from './photoItem.style';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';

const PhotoItem = ({photo}: any) => {
  const icon = useMemo(() => {
    return randomIcon();
  }, [photo]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
        <Text>
          <Icon
            color={colors.purple}
            name={`${icon}-outline`}
            size={metrics.scale(30)}
          />
        </Text>
      </View>
    </>
  );
};

export default PhotoItem;
