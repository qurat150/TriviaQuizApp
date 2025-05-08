import {StyleSheet} from 'react-native';

import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  levelSelectContainer: {
    paddingHorizontal: Metrix.HorizontalSize(16),
    paddingVertical: Metrix.HorizontalSize(24),
    marginBottom: Metrix.VerticalSize(24),
    borderRadius: Metrix.VerticalSize(20),
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  radioButton: {
    width: Metrix.HorizontalSize(18),
    height: Metrix.HorizontalSize(18),
    borderRadius: Metrix.VerticalSize(100),
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioFill: {
    width: Metrix.HorizontalSize(11),
    height: Metrix.HorizontalSize(11),
    borderRadius: Metrix.VerticalSize(100),
    backgroundColor: Colors.primary,
  },
});

export {styles};
