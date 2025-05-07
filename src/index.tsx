import {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainNavigation from './navigation/MainStack';
import {Splash} from './screens';

const RootStack = createStackNavigator();

const Route = () => {
  const [splashShow, setSplashShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashShow(false);
    }, 2000);
  }, []);

  if (splashShow) {
    return <Splash />;
  }

  return (
    <RootStack.Navigator
      initialRouteName={'MainNavigation'}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={'Splash'} component={Splash} />
      <RootStack.Screen name={'MainNavigation'} component={MainNavigation} />
    </RootStack.Navigator>
  );
};

export default Route;
