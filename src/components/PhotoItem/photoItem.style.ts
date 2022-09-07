import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: colors.gray,
    marginHorizontal: metrics.scale(40),
  },
  title: {
    ...typography.itemTitle,
    width: metrics.scale(75 * 3),
    marginVertical: metrics.scale(15),
    textAlign: 'right',
    fontSize: metrics.scaledFontSize(16),
    color: colors.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
