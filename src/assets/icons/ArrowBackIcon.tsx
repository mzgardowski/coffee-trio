import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const ArrowBack = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M627 948 276 597q-5-5-7-10t-2-11q0-6 2-11t7-10l351-351q11-11 28-11t28 11q12 12 12 28.5T683 261L368 576l315 315q13 13 12 29t-12 27q-12 12-28.5 12T627 948Z" />
    </Svg>
  );
};

export default ArrowBack;