import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.scale(23),
    flexDirection: 'row',
    marginHorizontal: metrics.scale(35),
    alignItems: 'center',
  },
  title: {
    ...typography.itemTitle,
    color: colors.darkContrast,
  },

  id: {
    ...typography.itemTitle,
    color: colors.salmon,
    marginRight: 15,
  },
});
