import { Colors } from "./types";

// Bright
const BRIGHT_BLUE = "#D8F2FE";
export const ACCENT_BLUE = "#49BEFA";
const WHITE_BLUE = "#EBF8FF";
// const MEDIUM_BLUE = "#9ADDFE";
const BRIGHT_BACKGROUND = "#d8f1fe";

// Dark
const DARK_BLUE = "#121E2C";
const DARK_BLUE_SECOND = "#1D3149";
const DARK_MEDIUM_BLUE = "#111D2C";
const DARK_MODE_ACCENT_BLUE = "#00B5EB";

// const ACCENT_BLUE_BORDER = `1px solid ${ACCENT_BLUE}`;

export const baseColors = {
  failure: "#C53636",
  primary: ACCENT_BLUE,
  primaryBright: WHITE_BLUE,
  primaryDark: DARK_BLUE,
  secondary: "#045077",
  success: "#40A048",
  warning: "#FF8B47",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: BRIGHT_BACKGROUND,
  backgroundDisabled: "#EBF8FE",
  contrast: DARK_BLUE,
  invertedContrast: BRIGHT_BACKGROUND,
  input: WHITE_BLUE,
  inputSecondary: WHITE_BLUE,
  tertiary: "#EFF4F5",
  text: DARK_BLUE_SECOND,
  textDisabled: "#BDC2C4",
  textSubtle: DARK_MODE_ACCENT_BLUE,
  toggle: ACCENT_BLUE,
  borderColor: "#E9EAEB",
  card: "#EAF8FF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4EC0F9",
  background: DARK_BLUE_SECOND,
  backgroundDisabled: "#294466",
  contrast: BRIGHT_BACKGROUND,
  invertedContrast: DARK_BLUE,
  input: DARK_MEDIUM_BLUE,
  inputSecondary: DARK_MEDIUM_BLUE,
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: BRIGHT_BLUE,
  textDisabled: "#666171",
  textSubtle: ACCENT_BLUE,
  toggle: DARK_MODE_ACCENT_BLUE,
  borderColor: "#524B63",
  card: DARK_BLUE,
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
