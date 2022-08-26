import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.photosBackground,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.lightBlue,
    textAlign: 'center',
  },
  list: {
    paddingTop: metrics.scaleVertical(10),
  },
  text: {
    fontSize: metrics.scaledFontSize(15),
    color: colors.lightBlue,
  },
});
