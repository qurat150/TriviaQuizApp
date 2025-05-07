import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Trivia Quizz App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
