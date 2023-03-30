import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const DoneIcon = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M378 798q-6 0-11-2t-10-7L176 608q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399 789q-5 5-10 7t-11 2Z" />
    </Svg>
  );
};

export default DoneIcon;
