import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {capitalizeFirstLetter, wait} from '../../../utils/stringUtils';
import {RootStackParams} from '../../../navigator/StackNavigator';
import {styles} from './photoDetail.style';
import Icon from 'react-native-vector-icons/Ionicons';
import metrics from '../../../themes/metrics';
import {colors} from '../../../themes/colors';
import {Loader} from '../../Loader/Loader';

interface Props extends StackScreenProps<RootStackParams, 'PhotoDetail'> {}

const PhotoDetail = ({route, navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const {title, thumbnailUrl} = route.params;

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

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
        {refreshing ? (
          <Loader />
        ) : (
          <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
            <Image source={{uri: thumbnailUrl}} style={styles.image} />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default PhotoDetail;
