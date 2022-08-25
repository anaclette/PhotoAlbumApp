import React from 'react';
import {API_HOST, copies, ENDPOINTS} from '../../utils/variables';
import useFetch from '../../utils/hooks/useFetch';
import {Text, StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import PhotoItem from '../../components/PhotoItem/PhotoItem';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParams} from '../../navigator/StackNavigator';
import {styles} from './photos.style';

interface Props extends StackScreenProps<RootStackParams, 'Photos'> {}

const Photos = ({navigation}: Props) => {
  const {response, error, loading} = useFetch(
    `${API_HOST}/${ENDPOINTS.PHOTOS}`,
  );

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }
  if (error) {
    return <Text style={styles.text}>{`Oops, ${JSON.stringify(error)}`}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{copies.PHOTOS_TITLE}</Text>
      </View>
      <FlatList
        style={styles.list}
        data={response}
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
    </SafeAreaView>
  );
};

export default Photos;
