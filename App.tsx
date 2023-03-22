import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SandBox from './src/Pages/Sandbox';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SandBox />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
