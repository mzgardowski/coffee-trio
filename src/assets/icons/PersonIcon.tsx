import React from 'react';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const PersonIcon = ({
  height = 48,
  width = 48,
  viewBox = '0 96 960 960',
  ...restProps
}: SvgProps) => {
  return (
    <Svg height={height} viewBox={viewBox} width={width} {...restProps}>
      <Path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm260 321H220q-24.75 0-42.375-17.625T160 836v-34q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v34q0 24.75-17.625 42.375T740 896Zm-520-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
    </Svg>
  );
};
export default PersonIcon;
