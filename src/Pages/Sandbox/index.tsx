import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from 'src/assets/colors';

const Sandbox = () => {
  return (
    <View>
      <View style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary_background,
  },
});

export default Sandbox;
