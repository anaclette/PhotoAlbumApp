import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    width: '85%',
    marginVertical: 20,
    textAlign: 'right',
    fontSize: 20,
    color: '#f1fffa',
  },
});
