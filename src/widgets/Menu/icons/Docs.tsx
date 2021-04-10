import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6.06,13.09V10.9h15.7v2.19Zm0,2.18H17.27v2.18H6.06ZM22.32,0H5.49A1.83,1.83,0,0,0,3.82,1.81V22.18A1.84,1.84,0,0,0,5.68,24H22.13A1.84,1.84,0,0,0,24,22.18V1.81A1.83,1.83,0,0,0,22.32,0Zm-.56,8.72H6.06V6.54h15.7Z" />
      <path d="M.57.1A.59.59,0,0,0,0,.71V23.25H0a.59.59,0,0,0,.57.62h.7a.6.6,0,0,0,.57-.62h0V.71A.59.59,0,0,0,1.27.1Z" />
    </Svg>
  );
};

export default Icon;
