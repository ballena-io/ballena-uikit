import { baseColors } from './colors';
import { Breakpoints, MediaQueries, Spacing } from './types';

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  level1: `0px 2px 12px -8px rgba(19, 31, 44, 0.1), 0px 1px 1px rgba(29, 49, 73, 0.05)`,
  active: `0px 0px 0px 1px ${baseColors.primary}, 0px 0px 4px 2px rgba(73, 190, 250, 0.4)`,
  success: `0px 0px 0px 1px ${baseColors.success}, 0px 0px 0px 2px rgba(247, 131, 64, 0.2)`,
  warning: `0px 0px 0px 1px ${baseColors.warning}, 0px 0px 0px 2px rgba(237, 75, 158, 0.2)`,
  focus: `0px 0px 0px 1px ${baseColors.primary}, 0px 0px 0px 2px rgba(73, 190, 250, 0.5)`,
  inset: 'inset 0px 2px 2px -1px rgba(102, 102, 143, 0.1)',
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: '4px',
  default: '8px',
  card: '8px',
  circle: '50%',
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
};
