import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import metrics from '../../themes/metrics';
import typography from '../../themes/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.blueBackground,
  },
  username: {
    ...typography.mediumText,
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    fontSize: metrics.scaledFontSize(40),
  },
  buttonText: {
    ...typography.itemTitle,
    color: colors.white,
    marginTop: 50,
    fontSize: metrics.scale(15),
    borderColor: colors.cream,
    borderWidth: StyleSheet.hairlineWidth,
    padding: metrics.scale(10),
    borderRadius: 10,
  },
  userInputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userInput: {
    ...typography.itemTitle,
    color: colors.white,
  },
  warningText: {
    color: colors.white,
    ...typography.itemTitle,
    fontSize: metrics.scaledFontSize(15),
  },
  textInput: {
    ...typography.itemTitle,
    backgroundColor: colors.white,
    color: colors.darkContrast,
    position: 'absolute',
    top: '50%',
    width: '50%',
    padding: metrics.scale(10),
    borderRadius: 10,
  },
  warningContainer: {
    justifyContent: 'center',
    height: metrics.scale(45),
    marginHorizontal: metrics.scale(15),
  },
});
