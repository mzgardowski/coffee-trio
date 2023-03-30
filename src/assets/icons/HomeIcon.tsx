import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const HomeIcon = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm0 60q-24.75 0-42.375-17.625T160 876V486q0-14.25 6.375-27T184 438l260-195q8.295-6 17.344-9 9.049-3 18.853-3 9.803 0 18.717 3 8.915 3 17.086 9l260 195q11.25 8.25 17.625 21T800 486v390q0 24.75-17.625 42.375T740 936H530V686H430v250H220Zm260-353Z" />
    </Svg>
  );
};

export default HomeIcon;
