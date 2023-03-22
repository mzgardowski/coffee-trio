/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SandBox from './src/Pages/Sandbox';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* <Text>My App name is {APP_NAME}</Text>s */}
        <SandBox />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
