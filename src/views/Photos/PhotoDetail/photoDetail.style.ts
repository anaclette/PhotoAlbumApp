import {StyleSheet} from 'react-native';
import {colors} from '../../../themes/colors';
import metrics from '../../../themes/metrics';
import typography from '../../../themes/typography';

const ITEM_SIZE = metrics.screenWidth - metrics.scale(70);
const WINDOW_TOP_DISTANCE = metrics.screenHeight / 3;

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.beige,
  },
  container: {
    flex: 1,
    height: WINDOW_TOP_DISTANCE * 2,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.purple,
    marginHorizontal: metrics.scale(13),
    marginVertical: metrics.scale(25),
    fontSize: metrics.scale(26),
    textAlign: 'center',
    height: WINDOW_TOP_DISTANCE / 1.5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: 15,
    justifyContent: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.scale(10),
    alignSelf: 'flex-start',
    marginLeft: metrics.scale(20),
  },
  arrowButton: {
    borderRadius: metrics.scale(10),
    position: 'absolute',
    top: WINDOW_TOP_DISTANCE * 1.3,
  },
  previousArrowButton: {
    left: metrics.scale(3),
    zIndex: 1,
  },
  nextArrowButton: {
    right: metrics.scale(3),
  },
});
