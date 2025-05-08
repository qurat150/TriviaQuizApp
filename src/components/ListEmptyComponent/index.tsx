import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors} from '../../config';

const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color={Colors.primary} />
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
