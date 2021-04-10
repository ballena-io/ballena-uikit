import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M9.11,18.41v0h0L4.59,16.17A.3.3,0,0,1,4.46,16V5.65L9.11,8Z" />
      <polygon points="9.67 13.5 9.67 8.81 13.85 15.58 9.67 13.5" />
      <polygon points="11.53 10.74 14.73 5.58 19.42 7.91 14.61 15.74 11.53 10.74" />
      <path d="M19.54,18.41v0h0L15,16.16l4.52-7.35Z" />
    </Svg>
  );
};

export default Icon;
