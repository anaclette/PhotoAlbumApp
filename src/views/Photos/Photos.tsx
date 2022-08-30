import React, {useCallback, useState} from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import useFetch from '../../utils/hooks/useFetch';
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import PhotoItem from '../../components/PhotoItem';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {Loader} from '../Loader/Loader';
import {wait} from '../../utils/stringUtils';
import {styles} from './photos.style';

interface Props extends StackScreenProps<RootStackParams, 'Photos'> {}

export const Photos = ({navigation}: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.PHOTOS}`,
  );

  const loader = loading || isLoading;

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    wait(2000).then(() => setIsLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{copies.PHOTOS_TITLE}</Text>
      {loader ? (
        <Loader />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{copies.FAILED_TO_FETCH}</Text>
        </View>
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
            }
            style={styles.list}
            data={isLoading ? [] : response}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('PhotoDetail', {
                    id: item['id'],
                    albumId: item['albumId'],
                    title: item['title'],
                    url: item['url'],
                    thumbnailUrl: item['thumbnailUrl'],
                  })
                }>
                <PhotoItem photo={item} />
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};
