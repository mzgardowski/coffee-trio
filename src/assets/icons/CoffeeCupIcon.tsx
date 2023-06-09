import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const CoffeeCupIcon = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M442 814q-115 0-198.5-81.5T160 539V276q0-24 18-42t42-18h529q54.271 0 92.636 37Q880 290 880 344t-38.364 91Q803.271 472 749 472h-25v67q0 112-83.5 193.5T442 814ZM220 412h444V276H220v136Zm222 342q91 0 156.5-63.5T664 539v-67H220v67q0 88 65.5 151.5T442 754Zm282-342h25q29 0 50-19.5t21-48.5q0-29-21-48.5T749 276h-25v136ZM190 936q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 876h574q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T764 936H190Zm252-464Z" />
    </Svg>
  );
};

export default CoffeeCupIcon;
