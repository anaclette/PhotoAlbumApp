import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.albumsBackground,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  title: {
    ...typography.sectionTitle,
    color: colors.salmon,
    textAlign: 'center',
  },
  list: {
    backgroundColor: colors.albumsBackground,
  },
  shadowProp: {
    shadowColor: colors.white,
    shadowOffset: {width: -4, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: metrics.scaledFontSize(25),
    color: colors.darkContrast,
    marginHorizontal: metrics.scale(5),
  },
});
