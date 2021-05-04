import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Text from '../Text/Text';
import balleHeadMain from './svg/balleHeadMain.svg';
import balleHeadMax from './svg/balleHeadMax.svg';
import balleTail from './svg/balleTail.svg';

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? 'not-allowed' : 'cursor';
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${isMax ? balleHeadMax : balleHeadMain});
  cursor: ${getCursorStyle};
  width: 32px;
  height: 30.5px;
  filter: ${disabled ? 'grayscale(100%)' : 'none'};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? 'scale(1) translate(-2px, -2px)' : 'scale(1.05) translate(-2px, -2px)'};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BalleTail = styled.div<DisabledProp>`
  background: url(${balleTail}) no-repeat;
  height: 36px;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  position: absolute;
  width: 25px;
  top: -8px;
  left: -4.8px;
`;

export const BalleSlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${getBaseThumbStyles}
  }
  ::-moz-range-thumb {
    ${getBaseThumbStyles}
    background-color: transparent;
    border: 0;
  }
  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? 'textDisabled' : 'inputSecondary']};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 100%;
`;

// original height: 10 top 18px // 15 y 13 luego
export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  height: 14.77px;
  position: absolute;
  top: 13px;
`;
