import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        d="M5.18,21.67a.77.77,0,0,0,.76.78H8.62V16.2a2.31,2.31,0,0,1,2.29-2.33H13.2a2.31,2.31,0,0,1,2.3,2.33v6.25h2.67a.78.78,0,0,0,.77-.78V12H5.18Z"
        transform="translate(0)"
      />
      <path
        fill="none"
        d="M13.2,15.42H10.91a.77.77,0,0,0-.76.78v6.25H14V16.2A.78.78,0,0,0,13.2,15.42Z"
        transform="translate(0)"
      />
      <polygon
        fill="none"
        points="21.31 10.43 21.28 10.4 20.57 9.74 20.57 9.74 20.46 9.64 18.95 8.24 18.76 8.06 12.05 1.82 5.37 7.98 5.15 8.18 3.65 9.56 3.25 9.93 2.74 10.4 2.71 10.43 2.69 10.45 21.33 10.45 21.33 10.45 21.31 10.43"
      />
      <path
        // fill="#49befa"
        d="M24,11.2a.78.78,0,0,0-.25-.6l-.21-.2L12.57.2a.33.33,0,0,0-.1-.06.57.57,0,0,0-.13-.08L12.2,0l-.14,0-.14,0-.15,0-.13.07-.1.07L.46,10.4l-.21.2a.78.78,0,0,0-.25.6H0v0a.43.43,0,0,1,0,0,.13.13,0,0,0,0,.06v0H0a.76.76,0,0,0,.74.6H3.65v9.67A2.32,2.32,0,0,0,5.94,24H18.17a2.31,2.31,0,0,0,2.29-2.33V12h2.76a.78.78,0,0,0,.78-.77v0ZM14,22.45H10.15V16.2a.77.77,0,0,1,.76-.78H13.2a.78.78,0,0,1,.77.78Zm5-.78a.78.78,0,0,1-.77.78H15.5V16.2a2.31,2.31,0,0,0-2.3-2.33H10.91A2.31,2.31,0,0,0,8.62,16.2v6.25H5.94a.77.77,0,0,1-.76-.78V12H18.94ZM2.69,10.45v0l0,0,.51-.47.4-.37,1.5-1.38L5.37,8l6.68-6.16,6.71,6.24.19.18,1.51,1.4.11.1h0l.71.66,0,0,0,0H2.69Z"
        transform="translate(0)"
      />
    </Svg>
  );
};

export default Icon;
