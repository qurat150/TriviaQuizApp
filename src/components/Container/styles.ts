import {StyleSheet} from 'react-native';

import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerContainer: {
    marginTop: Metrix.VerticalSize(40),
    marginBottom: Metrix.VerticalSize(24),
    marginHorizontal: Metrix.HorizontalSize(24),
  },
  backIconContainer: {
    marginTop: Metrix.VerticalSize(70),
  },
  backButton: {
    marginBottom: Metrix.VerticalSize(50),
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: Metrix.VerticalSize(40),
    borderTopLeftRadius: Metrix.VerticalSize(40),
  },
});

export default styles;
