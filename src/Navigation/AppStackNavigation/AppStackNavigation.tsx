import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'src/Pages/LoginScreen';
import Sandbox from 'src/Pages/Sandbox';
import WelcomeScreen from 'src/Pages/WelcomeScreen';

export type StackNavigationInterface = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  Sandbox: undefined;
};

const StackNavigation = createStackNavigator<StackNavigationInterface>();

const AppStackNavigation = () => {
  return (
    <StackNavigation.Navigator initialRouteName="WelcomeScreen">
      <StackNavigation.Screen name="LoginScreen" component={LoginScreen} />
      <StackNavigation.Screen name="Sandbox" component={Sandbox} />
      <StackNavigation.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </StackNavigation.Navigator>
  );
};

export default AppStackNavigation;
