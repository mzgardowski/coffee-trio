import React from 'react';
import { Text } from '@rneui/base';
import { colors } from 'src/assets/colors';

type TypographyTypes = 'headline1';

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
    fontSize: 38,
    fontFamily: 'DancingScript-Bold',
    color: colors.text_black,
  },
};

const Typography = ({ text, type }: TypographyInterface) => {
  return <Text style={{ ...typographyStyle[type] }}>{text}</Text>;
};

export default Typography;
