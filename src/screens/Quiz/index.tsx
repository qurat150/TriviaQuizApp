import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <Text>Quizz App</Text>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
