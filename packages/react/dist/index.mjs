// ../tokens/dist/index.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var colors_exports = {};
__export(colors_exports, {
  colors: () => colors
});
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var font_sizes_exports = {};
__export(font_sizes_exports, {
  fontSizes: () => fontSizes
});
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var font_weights_exports = {};
__export(font_weights_exports, {
  fontWeights: () => fontWeights
});
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts_exports = {};
__export(fonts_exports, {
  fonts: () => fonts
});
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var line_heights_exports = {};
__export(line_heights_exports, {
  lineHeights: () => lineHeights
});
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
var radii_exports = {};
__export(radii_exports, {
  radii: () => radii
});
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space_exports = {};
__export(space_exports, {
  space: () => space
});
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var App = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { style: { color: colors_exports.colors.gray700 }, children: "Hello, world!" }) });
};
export {
  App
};
