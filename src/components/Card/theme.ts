import { shadows } from '../../theme/base';
import { ACCENT_BLUE_BORDER, darkColors, lightColors } from '../../theme/colors';
import { CardTheme } from './types';

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: ACCENT_BLUE_BORDER,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: '#FFFFFF',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: ACCENT_BLUE_BORDER,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: '#000000',
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
};
