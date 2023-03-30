import React from 'react';
import { Text } from '@rneui/base';
import { colors } from 'src/utils/colors';
import { TextSize } from 'src/utils/textSize';
import { FontTypes } from 'src/utils/fontTypes';

type TypographyTypes = 'headline1' | 'headLine2' | 'button1' | 'button2';

interface TypographyInterface {
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
    color: colors.text_black,
  },
  headLine2: {
    fontSize: TextSize.s36,
    fontFamily: FontTypes.DancingMedium,
    color: colors.text_black,
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
  console.log(text);
  return <Text style={{ ...typographyStyle[type] }}>{text}</Text>;
};

export default Typography;
