import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from 'src/utils/colors';
import ArrowBack from 'src/assets/icons/ArrowBackIcon';
import ArrowForwardIcon from 'src/assets/icons/ArrowForwardIcon';
import CoffeeCupIcon from 'src/assets/icons/CoffeeCupIcon';
import DoneIcon from 'src/assets/icons/DoneIcon';
import HangOutIcon from 'src/assets/icons/HangOutIcon';
import HomeIcon from 'src/assets/icons/HomeIcon';
import PersonIcon from 'src/assets/icons/PersonIcon';
import SearchIcon from 'src/assets/icons/SearchIcon';
import CustomButton from 'src/Components/CustomButton';

const Sandbox = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyleDancingMedium}>Hello World</Text>
      <Text style={styles.textStyleDancingRegular}>Hello World</Text>
      <Text style={styles.textStyleInconsolataBold}>Hello World</Text>
      <Text style={styles.textStyleInconsolataRegular}>Hello World</Text>
      <Text style={styles.textStyleInconsolataLight}>Hello World</Text>
      <CustomButton title="Login" typeBtn="primary" />
      <CustomButton title="Register" typeBtn="secondary" />
      <HomeIcon />
      <PersonIcon />
      <SearchIcon />
      <DoneIcon />
      <ArrowBack />
      <ArrowForwardIcon />
      <CoffeeCupIcon />
      <HangOutIcon width={100} height={100} />
      <View style={[styles.background, styles.blockSize]} />
      <View style={[styles.secondarybBackground, styles.blockSize]} />
      <View style={[styles.primaryButton, styles.blockSize]} />
      <View style={[styles.greenBtn, styles.blockSize]} />
      <View style={[styles.redBtn, styles.blockSize]} />
      <View style={[styles.textPrimary, styles.blockSize]} />
      <View style={[styles.borderPrimary, styles.blockSize]} />
      <View style={[styles.borderSecondary, styles.blockSize]} />
      <View style={[styles.borderRed, styles.blockSize]} />
    </View>
  );
};

const styles = StyleSheet.create({
  blockSize: {
    width: 120,
    height: 60,
    borderRadius: 8,
    margin: 8,
  },
  background: {
    backgroundColor: colors.primary_background,
  },
  secondarybBackground: {
    backgroundColor: colors.secondary_bacground,
  },
  primaryButton: {
    backgroundColor: colors.primary_button,
  },
  greenBtn: {
    backgroundColor: colors.button_green,
  },
  redBtn: {
    backgroundColor: colors.button_red,
  },
  textPrimary: {
    backgroundColor: colors.text_primary,
  },
  textSecondary: {
    backgroundColor: colors.text_secondary,
  },
  textBlack: {
    backgroundColor: colors.text_black,
  },
  textGray: {
    backgroundColor: colors.text_gray,
  },
  textWhite: {
    backgroundColor: colors.text_white,
  },
  textRed: {
    backgroundColor: colors.text_red,
  },
  borderPrimary: {
    borderColor: colors.primary_border,
    borderWidth: 4,
  },
  borderSecondary: {
    borderColor: colors.secondary_border,
    borderWidth: 4,
  },
  borderRed: {
    borderColor: colors.red_border,
    borderWidth: 4,
  },
  textStyle: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 38,
  },
  textStyleDancingMedium: {
    fontFamily: 'DancingScript-Medium',
    fontSize: 30,
  },
  textStyleDancingRegular: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 22,
  },
  textStyleInconsolataBold: {
    fontFamily: 'Inconsolata-Bold',
    fontSize: 38,
  },
  textStyleInconsolataRegular: {
    fontFamily: 'Inconsolata-Regular',
    fontSize: 30,
  },
  textStyleInconsolataLight: {
    fontFamily: 'Inconsolata-Light',
    fontSize: 22,
  },
});

export default Sandbox;
