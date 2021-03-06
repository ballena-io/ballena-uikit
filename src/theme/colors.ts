import { Colors } from './types';

// Bright
const BRIGHT_BLUE = '#D8F2FE';
export const ACCENT_BLUE = '#49BEFA';
const WHITE_BLUE = '#EBF8FF';
const DARK_BLUE_TEXT = '#1f4575';

// Dark
const DARK_BLUE = '#121E2C';
const DARK_BLUE_SECOND = '#1D3149';
const DARK_MEDIUM_BLUE = '#111D2C';
const DARK_MODE_ACCENT_BLUE = '#00B5EB';

export const ACCENT_BLUE_BORDER = `1px solid ${ACCENT_BLUE}`;

export const baseColors = {
  failure: '#C53636',
  primary: ACCENT_BLUE,
  primaryBright: WHITE_BLUE,
  primaryDark: DARK_BLUE,
  secondary: '#045077',
  success: '#4BB543',
  warning: '#F78340',
};

export const brandColors = {
  binance: '#F0B90B',
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: BRIGHT_BLUE,
  backgroundDisabled: '#EBF8FE',
  contrast: DARK_BLUE,
  icon: DARK_BLUE_TEXT,
  invertedContrast: BRIGHT_BLUE,
  input: WHITE_BLUE,
  inputSecondary: ACCENT_BLUE,
  tertiary: '#EFF4F5',
  text: DARK_BLUE_TEXT,
  textDisabled: '#BDC2C4',
  textSubtle: DARK_MODE_ACCENT_BLUE,
  toggle: ACCENT_BLUE,
  borderColor: '#056684',
  card: '#EAF8FF',
  gradients: {
    bubblegum: `linear-gradient(139.73deg, ${BRIGHT_BLUE} 0%, ${WHITE_BLUE} 100%)`,
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#4EC0F9',
  background: DARK_BLUE_SECOND,
  backgroundDisabled: '#294466',
  contrast: BRIGHT_BLUE,
  icon: ACCENT_BLUE,
  invertedContrast: DARK_BLUE_SECOND,
  input: DARK_MEDIUM_BLUE,
  inputSecondary: DARK_BLUE_SECOND,
  primaryDark: '#0098A1',
  tertiary: '#353547',
  text: BRIGHT_BLUE,
  textDisabled: '#666171',
  textSubtle: ACCENT_BLUE,
  toggle: DARK_MODE_ACCENT_BLUE,
  borderColor: '#056684',
  card: DARK_BLUE,
  gradients: {
    bubblegum: `linear-gradient(139.73deg, ${DARK_BLUE} 0%, ${DARK_BLUE_SECOND} 100%)`,
  },
};
