import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {backgroundColor: '#b3a394'},
  title: {
    fontSize: 50,
    color: '#a44a3f',
    letterSpacing: 1.2,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
  },
  shadowProp: {
    shadowColor: '#fff',
    shadowOffset: {width: -4, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  list: {
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: '#fafafa',
  },
});
