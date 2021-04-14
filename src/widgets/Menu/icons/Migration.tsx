import React from 'react';

import Svg from '../../../components/Svg/Svg';
import { SvgProps } from '../../../components/Svg/types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M10.15,16.46v5.13c0,1.33-.76,2.41-1.72,2.41H1.74C.78,24,0,22.92,0,21.59V2.41C0,1.08.78,0,1.74,0H8.43c1,0,1.72,1.08,1.72,2.41V7.54c0,.22-.13.4-.28.4H8.92c-.16,0-.29-.18-.29-.4v-5c0-.21-.13-.4-.29-.4H1.85c-.17,0-.3.19-.3.4V21.47c0,.21.13.4.3.4H8.31c.16,0,.29-.19.29-.4v-5c0-.22.13-.4.29-.4h1C10,16.06,10.15,16.24,10.15,16.46Z" />
      <path d="M14.11,16.06h1c.16,0,.29.18.29.4v5c0,.21.13.4.29.4h6.47c.16,0,.29-.19.29-.4V2.53c0-.21-.13-.4-.29-.4H15.69c-.16,0-.29.19-.29.4v5c0,.22-.13.4-.29.4h-1c-.15,0-.28-.18-.28-.4V2.41c0-1.33.78-2.41,1.74-2.41h6.69C23.22,0,24,1.08,24,2.41V21.59c0,1.33-.78,2.41-1.74,2.41H15.57c-.92,0-1.74-1.08-1.74-2.41V16.46C13.85,16.24,14,16.06,14.11,16.06Z" />
      <path d="M8,12v2.1c0,.11,0,.15-.1.14H7c-.06,0-.09,0-.09-.11V9.88c0-.1,0-.12.1-.12h.92c.09,0,.12,0,.12.14C8,10.6,8,11.3,8,12Z" />
      <path d="M6.31,12v2.1c0,.11,0,.13-.1.13-.3,0-.3,0-.3-.37v-4c0-.12,0-.16.13-.15.28,0,.28,0,.28.35Z" />
      <path d="M8.59,9.78h7.67s.07,0,.07-.11V7.74c0-.09.08-.12.13-.07l3.36,4.22a.12.12,0,0,1,0,.14l-3.2,4.08a.09.09,0,0,1-.14-.08V14.32a.1.1,0,0,0-.08-.1H8.59s-.07,0-.07-.1V9.87a.07.07,0,0,1,.07-.09Z" />
    </Svg>
  );
};

export default Icon;