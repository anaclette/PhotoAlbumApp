import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, SafeAreaView, Image, Pressable} from 'react-native';
import {capitalizeFirstLetter} from '../../../utils/stringUtils';
import {RootStackParams} from '../../../navigator/StackNavigator';
import {styles} from './photoDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../../../themes/metrics';
import {colors} from '../../../themes/colors';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

const PhotoDetail = ({route, navigation}: Props) => {
  const {title, thumbnailUrl} = route.params;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.backButton} onPress={() => navigation.pop()}>
          <Icon
            size={metrics.scale(25)}
            name="arrow-back-circle-outline"
            color={colors.purple}
          />
        </Pressable>
        <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
        <Image source={{uri: thumbnailUrl}} style={styles.image} />
      </SafeAreaView>
    </>
  );
};

export default PhotoDetail;
