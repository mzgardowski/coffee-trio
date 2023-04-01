import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import SandBox from './src/Pages/Sandbox';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from './src/Navigation/AppStackNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

export default App;
