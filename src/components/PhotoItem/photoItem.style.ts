import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

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
    ...typography.itemTitle,
    width: metrics.scale(75 * 3),
    marginVertical: metrics.scale(15),
    textAlign: 'right',
    fontSize: metrics.scaledFontSize(16),
    color: colors.white,
  },
});
