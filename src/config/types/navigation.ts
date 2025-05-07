import {ParamListBase} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Signin: {rolee: string};
  Signup: undefined;
};

export type AppStackParamList = {
  Quiz: undefined;
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;
