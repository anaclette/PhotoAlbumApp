import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: metrics.scale(5),
    marginVertical: metrics.scale(10),
    paddingHorizontal: metrics.scale(3),
    width: metrics.scale(150),
    borderColor: colors.salmon,
    borderRadius: 15,
  },
  title: {
    flex: 1,
    paddingHorizontal: metrics.scale(3),
    marginVertical: metrics.scale(10),
    ...typography.itemTitle,
    color: colors.darkContrast,
  },
  pictureItem: {
    flex: 1,
  },

  icon: {
    marginTop: metrics.scale(10),
    alignSelf: 'flex-end',
    ...typography.itemTitle,
    color: colors.salmon,
    marginRight: 15,
  },
  shadowProp: {
    shadowColor: colors.white,
    shadowOffset: {width: 3, height: -1},
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
});
