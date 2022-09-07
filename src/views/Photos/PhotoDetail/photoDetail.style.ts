import {StyleSheet} from 'react-native';
import {colors} from '../../../themes/colors';
import metrics from '../../../themes/metrics';
import typography from '../../../themes/typography';

const ITEM_SIZE = metrics.screenWidth - metrics.scale(70);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.beige,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.purple,
    marginHorizontal: metrics.scale(13),
    marginVertical: metrics.scale(25),
    fontSize: metrics.scale(26),
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_SIZE + metrics.scale(60),
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
});
