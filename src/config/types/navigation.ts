import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Signin: {rolee: string};
  Signup: undefined;
};

export type AppStackParamList = {
  Quiz: {id: string; level: string};
  DifficultySelection: {id: string};
  QuizResultParams: {score: number; totalQuestions: number};
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;

export type DifficultySelectionProps = {
  route: RouteProp<AppStackParamList, 'DifficultySelection'>;
};

export type QuizScreenParams = {
  route: RouteProp<AppStackParamList, 'Quiz'>;
};

export type QuizResultParams = {
  route: RouteProp<AppStackParamList, 'QuizResultParams'>;
};
