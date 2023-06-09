import React from 'react';
import { Text, type TextProps } from '@rneui/base';
import { colors } from 'src/utils/colors';
import { TextSize } from 'src/utils/textSize';
import { FontTypes } from 'src/utils/fontTypes';

type TypographyTypes =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'button1'
  | 'button2'
  | 'normal1'
  | 'normal2'
  | 'small1'
  | 'small2';

interface TypographyInterface extends TextProps {
  text: string;
  type: TypographyTypes;
}

// headline 1
// headLine 2
// button 1
// button 2
// normal 1
// normal 2
// small 1
// small 2

const typographyStyle = {
  headline1: {
    fontSize: TextSize.s40,
    fontFamily: FontTypes.DancingBold,
    color: colors.text_white,
  },
  headline2: {
    fontSize: TextSize.s36,
    fontFamily: FontTypes.DancingMedium,
    color: colors.text_white,
  },
  headline3: {
    fontSize: TextSize.s40,
    fontFamily: FontTypes.DancingBold,
    color: colors.text_white,
  },
  headline4: {
    fontSize: TextSize.s36,
    fontFamily: FontTypes.InconsolataRegular,
    color: colors.text_white,
  },
  normal1: {
    fontSize: TextSize.s24,
    fontFamily: FontTypes.InconsolataBold,
    color: colors.text_white,
  },
  normal2: {
    fontSize: TextSize.s24,
    fontFamily: FontTypes.InconsolataRegular,
    color: colors.text_white,
  },
  small1: {
    fontSize: TextSize.s14,
    fontFamily: FontTypes.InconsolataBold,
    color: colors.text_white,
  },
  small2: {
    fontSize: TextSize.s12,
    fontFamily: FontTypes.InconsolataRegular,
    color: colors.text_white,
  },
  button1: {
    fontSize: TextSize.s18,
    fontFamily: FontTypes.InconsolataBold,
    color: colors.text_white,
  },
  button2: {
    fontSize: TextSize.s18,
    fontFamily: FontTypes.InconsolataBold,
    color: colors.text_secondary,
  },
};

const Typography = ({ text, type }: TypographyInterface) => {
  return <Text style={{ ...typographyStyle[type] }}>{text}</Text>;
};

export default Typography;
