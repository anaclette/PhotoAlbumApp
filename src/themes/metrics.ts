import {Dimensions} from 'react-native';
import {
  ms as RNModScale,
  mvs as RNModVScale,
  s as RNScale,
  vs as RNVerticalScale,
} from 'react-native-size-matters';
const {height, width} = Dimensions.get('window');

const scale = (size: number) => RNScale(size);
const scaleVertical = (size: number) => RNVerticalScale(size);
const modScale = (size: number, factor?: number) => RNModScale(size, factor);
const modScaleVertical = (size: number, factor?: number) =>
  RNModVScale(size, factor);
const HEIGHT_CUT_OFF = 600;
const scaledFontSize = (size: number) =>
  height > HEIGHT_CUT_OFF ? size : size * (height / (HEIGHT_CUT_OFF * 1.1));

export default {
  scaledFontSize,
  screenHeight: height,
  screenWidth: width,
  scale,
  scaleVertical,
  modScale,
  modScaleVertical,
};
