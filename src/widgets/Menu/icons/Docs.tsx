import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M23.71,5.38,17.51.24A1.13,1.13,0,0,0,16.82,0H1A.91.91,0,0,0,0,.81V23.19A.91.91,0,0,0,1,24H23a.91.91,0,0,0,1-.81V6A.73.73,0,0,0,23.71,5.38ZM17.79,2.76l2.88,2.38H17.79ZM2,22.38V1.62H15.84V6a.91.91,0,0,0,1,.81h5.23V22.38Z" />
      <path d="M18,8.89H6a.6.6,0,0,0-.65.54A.6.6,0,0,0,6,10H18a.6.6,0,0,0,.65-.54A.6.6,0,0,0,18,8.89Z" />
      <path d="M18,11.48H6a.6.6,0,0,0-.65.53.6.6,0,0,0,.65.54H18a.6.6,0,0,0,.65-.54A.6.6,0,0,0,18,11.48Z" />
      <path d="M18,14.06H6a.55.55,0,1,0,0,1.08H18a.55.55,0,1,0,0-1.08Z" />
    </Svg>
  );
};

export default Icon;
