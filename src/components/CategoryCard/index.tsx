import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Metrix} from '../../config';
import {CategoryCardProps} from '../../config/types/appDataTypes';

const CategoryCard = ({item}: CategoryCardProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrix.VerticalSize(80),
    backgroundColor: Colors.whiteV3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.greyV4,
    marginBottom: Metrix.VerticalSize(20),
    justifyContent: 'center',
    paddingHorizontal: Metrix.HorizontalSize(17),
  },
});
