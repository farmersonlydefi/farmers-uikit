import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f48337",
  primaryBright: "#f48337",
  primaryDark: "#FFFFFF",
  secondary: "#37733f",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#17191d",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#000000",
  tertiary: "#383940",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#BDC2C4",
  borderColor: "#E9EAEB",
  card: "#26262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#51c4d3",
  background: "#17191d",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#000000",
  primaryDark: "#FFFFFF",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#BDC2C4",
  borderColor: "#524B63",
  card: "#26262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
