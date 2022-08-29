import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palePink,
    flex: 1,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.purple,
    textAlign: 'center',
  },
  list: {
    paddingTop: metrics.scaleVertical(10),
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: metrics.scaledFontSize(25),
    color: colors.white,
    marginHorizontal: metrics.scale(5),
  },
});
