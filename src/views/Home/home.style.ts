import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import fonts from '../../themes/fonts';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.iOSnavBarBackground,
  },
  button: {
    marginVertical: 20,
  },
  buttonText: {
    ...typography.mediumText,
  },
});
