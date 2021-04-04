import { darkColors, lightColors } from '../../theme/colors';
import { NavTheme } from './types';

export const light: NavTheme = {
  color: lightColors.text,
  background: lightColors.card,
  hover: '#EEEAF4',
};

export const dark: NavTheme = {
  background: darkColors.card,
  color: darkColors.text,
  hover: '#473d5d',
};
