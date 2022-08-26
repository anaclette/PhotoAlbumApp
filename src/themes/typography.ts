import {colors} from './colors';
import fonts from './fonts';
import metrics from './metrics';

export default {
  mediumText: {
    fontFamily: fonts.MEDIUM_TEXT,
    fontSize: metrics.scaledFontSize(40),
    color: colors.cream,
  },
  itemTitle: {
    fontFamily: fonts.ITEM_TITLE,
    fontSize: metrics.scaledFontSize(20),
  },
  sectionTitle: {
    fontFamily: fonts.MAIN,
    letterSpacing: 1.4,
    fontSize: metrics.scaledFontSize(80),
  },
};
