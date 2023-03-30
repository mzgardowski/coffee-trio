import React from 'react';
import { Text, View } from 'react-native';

import CustomButton from 'src/Components/CustomButton';
import Typography from 'src/Components/Typography';

const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <Text>Welcome Screen</Text>
      </View>
      <View>
        <CustomButton
          typeBtn="primary"
          title={<Typography type="button1" text="Let's Go" />}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
