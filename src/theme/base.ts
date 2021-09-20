import { MediaQueries, Breakpoints, Spacing } from "./types";

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
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #008dbb, 0px 0px 4px 8px rgba(0, 141, 187, 0.4)",
  success: "0px 0px 0px 1px #68e7ec, 0px 0px 0px 4px rgba(104, 231, 236, 0.2)",
  warning: "0px 0px 0px 1px #fb9ba6, 0px 0px 0px 4px rgba(255, 155, 166, 0.2)",
  focus: "0px 0px 0px 1px #68e7ec, 0px 0px 0px 4px rgba(104, 231, 236, 0.6)",
  inset: "inset 0px 2px 2px -1px rgba(69, 93, 102, 0.1)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "8px",
  card: "8px",
  circle: "50%",
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
