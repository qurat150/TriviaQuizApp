import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIphoneX} from './isIPhoneX';
let {height, width} = Dimensions.get('window');

height -= Platform.OS == 'ios' ? (isIphoneX() ? 70 : 0) : 0;

const scale = height / 812;

const DEFAULT_HEIGHT = 812;
const DEFAULT_WIDTH = 375;
const DESING_HEIGHT = 812;
const DESIGN_WIDTH = 375;

const VerticalSize = (size = 812, defaultHeight = DEFAULT_HEIGHT) =>
  (size / defaultHeight) * height;
const HorizontalSize = (size = 375, defaultWidth = DEFAULT_WIDTH) =>
  (size / defaultWidth) * width;

const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const hitSlop = {
  right: 10,
  left: 10,
  top: 10,
  bottom: 10,
};

export default {
  Radius: VerticalSize(10),
  LightRadius: VerticalSize(7),
  HeavyRadius: VerticalSize(20),
  ActiveOpacity: 0.6,
  customFontSize: normalize,
  FontRegular: normalize(16),
  FontExtraSmall: normalize(12),
  FontSmall: normalize(14),
  FontMedium: normalize(18),
  FontLarge: normalize(22),
  VerticalSize,
  HorizontalSize,
  DESING_HEIGHT,
  DESIGN_WIDTH,
  hitSlop,
};
