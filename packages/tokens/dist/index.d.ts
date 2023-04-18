declare const colors: {
    white: string;
    black: string;
    gray100: string;
    gray200: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    ignite300: string;
    ignite500: string;
    ignite700: string;
    ignite900: string;
};

declare const colors$1_colors: typeof colors;
declare namespace colors$1 {
  export {
    colors$1_colors as colors,
  };
}

declare const fontSizes: {
    readonly xxs: "0.625rem";
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly md: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '4xl': "2rem";
    readonly '5xl': "2.25rem";
    readonly '6xl': "3rem";
    readonly '7xl': "4rem";
    readonly '8xl': "4.5rem";
    readonly '9xl': "6rem";
};

declare const fontSizes$1_fontSizes: typeof fontSizes;
declare namespace fontSizes$1 {
  export {
    fontSizes$1_fontSizes as fontSizes,
  };
}

declare const fontWeights: {
    readonly regular: "400";
    readonly medium: "500";
    readonly bold: "700";
};

declare const fontWeights$1_fontWeights: typeof fontWeights;
declare namespace fontWeights$1 {
  export {
    fontWeights$1_fontWeights as fontWeights,
  };
}

declare const fonts: {
    readonly default: "Roboto, sans-serif";
    readonly code: "monospace";
};

declare const fonts$1_fonts: typeof fonts;
declare namespace fonts$1 {
  export {
    fonts$1_fonts as fonts,
  };
}

declare const lineHeights: {
    readonly shorter: "125%";
    readonly short: "140%";
    readonly base: "160%";
    readonly tall: "180%";
};

declare const lineHeights$1_lineHeights: typeof lineHeights;
declare namespace lineHeights$1 {
  export {
    lineHeights$1_lineHeights as lineHeights,
  };
}

declare const radii: {
    readonly px: "1px";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "16px";
    readonly full: "99999px";
};

declare const radii$1_radii: typeof radii;
declare namespace radii$1 {
  export {
    radii$1_radii as radii,
  };
}

declare const space: {
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 40: "10rem";
    readonly 64: "16rem";
    readonly 80: "20rem";
};

declare const space$1_space: typeof space;
declare namespace space$1 {
  export {
    space$1_space as space,
  };
}

export { colors$1 as colors, fontSizes$1 as fontSizes, fontWeights$1 as fontWeights, fonts$1 as fonts, lineHeights$1 as lineHeights, radii$1 as radii, space$1 as space };
