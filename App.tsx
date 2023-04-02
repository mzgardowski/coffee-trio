import React from 'react';
import { SafeAreaView, Platform } from 'react-native';
import SandBox from './src/Pages/Sandbox';
import { NavigationContainer } from '@react-navigation/native';
import RealmContext from './src/realm/RealmContext';
import AppStackNavigation from './src/Navigation/AppStackNavigation';

function App(): JSX.Element {
  const { RealmProvider } = RealmContext;
  return (
    <RealmProvider>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </RealmProvider>
  );
}

export default App;
