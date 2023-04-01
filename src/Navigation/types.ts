import { type NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  TabNavigation: undefined;
  HomeScreen: undefined;
  Sandbox: undefined;
  SearchScreen: undefined;
  FavoritesScreen: undefined;
  AccountScreen: undefined;
};

export type RootStacknavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
