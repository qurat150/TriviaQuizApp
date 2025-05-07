import {TextProps, TextStyle} from 'react-native';

export interface TypographyProps extends TextProps {
  color?: string;
  size?: number;
  mT?: number;
  mB?: number;
  extraLight?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  upperCase?: boolean;
  capitalize?: boolean;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  text?: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  lineHeight?: number;
  children?: React.ReactNode;
  letterSpacing?: number;
  style?: TextStyle;
  textDecoration?: 'underline' | 'line-through' | 'none';
}

export type ContainerProps = {
  pH?: number;
  children: React.ReactNode;
  headerTitle: string;
  headerSubText: string;
  backIcon?: boolean;
  contentContainerStyle?: Object;
  backIconHandler?: boolean;
  handleBackIcon?: () => void;
  scrollViewRef?: React.RefObject<any>;
  onScroll?: (event: any) => void;
  scrollView: boolean;
};

export type CategoryCardProps = {
  item: {
    id: number;
    name: string;
  };
};
