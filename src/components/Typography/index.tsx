import React from 'react';
import {Text, TextStyle} from 'react-native';

import {Colors, Metrix} from '../../config';
import {TypographyProps} from '../../config/types/appDataTypes';
import fonts from '../../config/fonts';

const Typography: React.FC<TypographyProps> = ({
  color = Colors.text,
  size = 16,
  mT = 0,
  mB = 0,
  extraLight = false,
  light = false,
  medium = false,
  semiBold = false,
  bold = false,
  extraBold = false,
  upperCase = false,
  capitalize = false,
  textAlign = 'left',
  text,
  numberOfLines,
  ellipsizeMode = 'tail',
  lineHeight,
  children,
  letterSpacing,
  textDecoration = 'none',
  style,
  ...props
}) => {
  const styleObj: TextStyle = {
    color: color,
    fontSize: Metrix.customFontSize(size),
    marginTop: Metrix.VerticalSize(mT),
    marginBottom: Metrix.VerticalSize(mB),
    textDecorationLine: textDecoration,
    ...(extraLight
      ? fonts.extraLight()
      : light
      ? fonts.light()
      : medium
      ? fonts.medium()
      : semiBold
      ? fonts.semiBold()
      : bold
      ? fonts.bold()
      : extraBold
      ? fonts.extraBold()
      : fonts.regular()),
    ...(upperCase && {textTransform: 'uppercase'}),
    ...(capitalize && {textTransform: 'capitalize'}),
    ...(letterSpacing && {letterSpacing}),
    textAlign,
    ...(lineHeight && {lineHeight: lineHeight}),
    ...style,
  };

  return (
    <Text
      style={styleObj}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}>
      {children || text}
    </Text>
  );
};

export default Typography;
