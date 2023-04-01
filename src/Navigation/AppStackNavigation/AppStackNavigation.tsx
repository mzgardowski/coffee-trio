import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'src/Pages/LoginScreen';
import Sandbox from 'src/Pages/Sandbox';
import WelcomeScreen from 'src/Pages/WelcomeScreen';
import AppTabNavigation from 'src/Navigation/AppTabNavigation';
import { type RootStackParamList } from 'src/Navigation/types';

const StackNavigation = createStackNavigator<RootStackParamList>();

const defaultScreenOptions = {
  headerShown: false,
};

const AppStackNavigation = () => {
  return (
    <StackNavigation.Navigator initialRouteName="WelcomeScreen">
      <StackNavigation.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ ...defaultScreenOptions }}
      />
      <StackNavigation.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ ...defaultScreenOptions }}
      />
      <StackNavigation.Screen
        name="TabNavigation"
        component={AppTabNavigation}
        options={{ ...defaultScreenOptions }}
      />
      <StackNavigation.Screen
        name="Sandbox"
        component={Sandbox}
        options={{ ...defaultScreenOptions }}
      />
    </StackNavigation.Navigator>
  );
};

export default AppStackNavigation;
