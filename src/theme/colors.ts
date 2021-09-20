import { Colors } from "./types";

export const baseColors = {
    failure: "#DD5252",
  primary: "#869bba",
  primaryBright: "#869bba",
  primaryDark: "#e3e1e1",
  secondary: "#283149",
  success: "#9FF8FF",
  warning: "#D199AE",
};

export const additionalColors = {
 binance: "#638E91",
  overlay: "#869bba",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#F4F4F9",
  backgroundDisabled: "#E8E9EB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E9EAEB",
  contrast: "#191325",
  dropdown: "#F4F4F9",
  dropdownDeep: "#E2E6ED",
  invertedContrast: "#FFFFFF",
  input: "#DFE7F2",
  inputSecondary: "#DFE7F2",
  tertiary: "#DEFFFE",
  text: "#b5b9c7",
  textDisabled: "#BDC2C4",
  textSubtle: "#6A93AD",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #C1D0F4 0%, #DFE7F2 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #DFE7F2 0%, #C1D0F4 100%)",
    cardHeader: "linear-gradient(111.68deg, #F4F4F9 0%, #E2E6ED 100%)",
    blue: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    violet: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    violetAlt: "linear-gradient(180deg, #CAEFED 0%, #C3D1E2 100%)",
    gold: "linear-gradient(180deg, #71FFFF 0%, #F2ACA2 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9AEBED",
  background: "#17172d",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#030323",
  cardBorder: "#38434C",
  contrast: "#191326",
  dropdown: "#1B1E1E",
  dropdownDeep: "#0E1214",
  invertedContrast: "#191326",
  input: "#3B3F56",
  inputSecondary: "#222B51",
  primaryDark: "#e3e1e1",
  tertiary: "#353547",
  text: "#E1E7F9",
  textDisabled: "#BDC2C4",
  textSubtle: "#B9CEEA",
  disabled: "#4A5160",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #31475B 0%, #272B35 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #272B35 0%, #31475B 100%)",
    cardHeader: "linear-gradient(166.77deg, #31475B 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #31475B 0%, #4A5160 100%)",
    violet: "linear-gradient(180deg, #31475B 0%, #31475B 100%)",
    violetAlt: "linear-gradient(180deg, #31475B 0%, #31475B 100%)",
    gold: "linear-gradient(180deg, #71FFFF 0%, #F2ACA2 100%)",
  },
};