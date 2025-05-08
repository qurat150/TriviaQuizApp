import {ParamListBase, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Signin: {rolee: string};
  Signup: undefined;
};

export type AppStackParamList = {
  Quiz: undefined;
  DifficultySelection: {id: string};
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;

export type DifficultySelectionProps = {
  route: RouteProp<AppStackParamList, 'DifficultySelection'>;
};
