import {StyleSheet} from 'react-native';
import fonts from '../../themes/fonts';
import metrics from '../../themes/metrics';

export const styles = StyleSheet.create({
  label: {
    paddingVertical: metrics.scale(10),
    fontFamily: fonts.ITEM_TITLE,
    fontSize: metrics.scale(15),
  },
});
