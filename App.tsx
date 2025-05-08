import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Colors, NavigationService} from './src/config';
import Route from './src';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar
        animated
        translucent={true}
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Route />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
