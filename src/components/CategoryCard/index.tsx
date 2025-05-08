import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Metrix} from '../../config';
import {CategoryCardProps} from '../../config/types/appDataTypes';
import {Typography, Flex} from '../index';

const CategoryCard = ({
  item,
  index,
  activeCategory,
  setActiveCategory,
}: CategoryCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setActiveCategory(index);
      }}
      activeOpacity={Metrix.ActiveOpacity}
      style={[
        styles.container,
        {
          borderColor:
            activeCategory === index ? Colors.primary : Colors.greyV4,
        },
      ]}>
      <Flex justifyContent="space-between">
        <Typography size={14} medium>
          {item.name}
        </Typography>

        {activeCategory === index && (
          <Icon name="checkmark-circle" size={25} color={Colors.primary} />
        )}
      </Flex>
    </TouchableOpacity>
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
