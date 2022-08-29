import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueBackground,
  },
  button: {
    marginVertical: metrics.scale(20),
  },
  buttonText: {
    ...typography.mediumText,
  },
});
