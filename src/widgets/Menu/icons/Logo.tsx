import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 116 26" {...props}>
      <image height="26" href="/images/ballena/logoWithText.png" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
