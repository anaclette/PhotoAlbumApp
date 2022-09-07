import React, {useCallback, useState} from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import {useSelector, useDispatch} from 'react-redux';
import useFetch from '../../utils/hooks/useFetch';
import {Text, FlatList, SafeAreaView, View, RefreshControl} from 'react-native';
import PhotoItem from '../../components/PhotoItem';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import Loader from '../Loader';
import {wait} from '../../utils/stringUtils';
import {styles} from './photos.style';

interface Props extends StackScreenProps<RootStackParams, 'Photos'> {
  title: string;
}

export const Photos = ({navigation, route}: Props) => {
  // export const Photos = () => {
  const [isLoading, setIsLoading] = useState(false);

  // const photos = useSelector(state => )

  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.PHOTOS}`,
  );

  const loadingState = loading || isLoading;

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    wait(2000).then(() => setIsLoading(false));
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: Props; index: number}) => {
      return (
        <PhotoItem
          navigation={navigation}
          index={index}
          photo={item}
          route={route}
        />
      );
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{copies.PHOTOS_TITLE}</Text>
      {loadingState ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loadingState} onRefresh={onRefresh} />
            }
            style={styles.list}
            data={loadingState ? [] : response}
            keyExtractor={(_, index) => 'key' + index}
            renderItem={renderItem}
          />
        </>
      )}
    </SafeAreaView>
  );
};
