import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color: string;
  size: number;
}

const Icon = (props: Props) => (
  <Svg
    width={props.size}
    height={props.size}
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <Path d="m6 9 6 6 6-6" />
  </Svg>
);
export default Icon;
