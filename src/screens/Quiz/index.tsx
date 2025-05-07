import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Container, Typography} from '../../components';
import {Colors} from '../../config';

const Quiz = () => {
  return (
    <Container
      headerTitle="Hello, James"
      headerSubText="Let's test your knowledge"
      backIcon={false}>
      <Typography>dsf</Typography>
    </Container>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
