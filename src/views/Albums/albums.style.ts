import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {backgroundColor: colors.albumsBackground},
  title: {
    ...typography.sectionTitle,
    color: colors.salmon,
    textAlign: 'center',
  },
  shadowProp: {
    shadowColor: colors.white,
    shadowOffset: {width: -4, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  list: {},
  text: {
    fontSize: 15,
    color: colors.white,
  },
});
