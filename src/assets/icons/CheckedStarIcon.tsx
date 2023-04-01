import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const CheckedStarIcon = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M480 827 294 939q-8 5-17 4.5t-16-5.5q-7-5-10.5-13t-1.5-18l49-212-164-143q-8-7-9.5-15.5t.5-16.5q2-8 9-13.5t17-6.5l217-19 84-200q4-9 12-13.5t16-4.5q8 0 16 4.5t12 13.5l84 200 217 19q10 1 17 6.5t9 13.5q2 8 .5 16.5T826 552L662 695l49 212q2 10-1.5 18T699 938q-7 5-16 5.5t-17-4.5L480 827Z" />
    </Svg>
  );
};

export default CheckedStarIcon;
