import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, StyleSheet, View} from 'react-native';
import {capitalizeFirstLetter, randomIcon} from '../utils/variables';

const PhotoItem = ({photo}: any) => {
  const icon = useMemo(() => {
    return randomIcon();
  }, [photo]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{capitalizeFirstLetter(photo.title)}</Text>
        <Text>
          <Icon name={`${icon}-outline`} size={30} />
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 40,
    justifyContent: 'space-between',
  },
  title: {
    width: '90%',
    marginVertical: 20,
    textAlign: 'right',
    fontSize: 20,
    color: '#f1fffa',
  },
});

export default PhotoItem;
