import {JSX} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors, Metrix} from '../../config';
import {Flex, Typography} from '../index';

type Props = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  useLinearGradient?: boolean;
  gradientColors?: string[];
  textColor?: string;
  textSize?: number;
  mT?: number;
  mB?: number;
  btnPH?: number;
  style?: object;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  icon?: JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
};

const StandardButton = ({
  title,
  onPress,
  textColor = '#fff',
  textSize = 16,
  mT = 0,
  mB = 0,
  bgColor = Colors.primary,
  style = {},
  btnPH = 20,
  icon,
  disabled = false,
  isLoading = false,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Metrix.ActiveOpacity}
      disabled={disabled || isLoading}
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          paddingVertical: Metrix.VerticalSize(btnPH),
          borderRadius: Metrix.Radius,
          marginTop: Metrix.VerticalSize(mT),
          marginBottom: Metrix.VerticalSize(mB),
        },
        style,
        disabled && {
          backgroundColor: Colors.greyV2,
          borderRadius: Metrix.Radius,
        },
      ]}>
      {isLoading ? (
        <ActivityIndicator color={Colors.white} size={btnPH} />
      ) : (
        <Flex gap={8} justifyContent="center">
          {icon}
          <Typography
            medium
            color={textColor}
            size={textSize}
            letterSpacing={0.2}
            semiBold>
            {title}
          </Typography>
        </Flex>
      )}
    </TouchableOpacity>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrix.Radius,
  },
});
