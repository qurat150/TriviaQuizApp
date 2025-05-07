import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Typography} from '../../components';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Typography bold>Trivia Quizz App</Typography>
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
