/* eslint-disable @typescript-eslint/ban-types */
export const LETTER_SPACINGS = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const

export enum KleeLetterSpacing {
  Tighter = 'tighter',
  Tight = 'tight',
  Normal = 'normal',
  Wide = 'wide',
  Wider = 'wider',
  Widest = 'widest',
}

export type ThemeLetterSpacingsValues = keyof typeof LETTER_SPACINGS | (string & {}) | (number & {})

export const LINE_HEIGHTS = {
  normal: 'normal',
  none: '1',
  shorter: '1.25',
  short: '1.375',
  base: '1.5',
  tall: '1.625',
  taller: '2',
} as const

export enum KleeLineHeight {
  Normal = 'normal',
  None = 'none',
  Shorter = 'shorter',
  Short = 'short',
  Base = 'base',
  Tall = 'tall',
  Taller = 'taller',
}

export type ThemeLineHeightsValues = keyof typeof LINE_HEIGHTS | (string & {}) | (number & {})

export const FONT_WEIGHTS = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const

export enum KleeFontWeight {
  Hairline = 'hairline',
  Thin = 'thin',
  Light = 'light',
  Normal = 'normal',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold',
  Extrabold = 'extrabold',
  Black = 'black',
}

export type ThemeFontWeightsValues = keyof typeof FONT_WEIGHTS | (string & {}) | (number & {})

export const FONT_FAMILIES = {
  heading: `Nunito, Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `Nunito, Zilla Slab, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
} as const

export enum KleeFontFamily {
  Heading = 'heading',
  Body = 'body',
  Mono = 'mono',
}

export type ThemeFontFamiliesValue = keyof typeof FONT_FAMILIES | (string & {})

export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
} as const

export enum KleeFontSize {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Xl2 = '2xl',
  Xl3 = '3xl',
  Xl4 = '4xl',
  Xl5 = '5xl',
  Xl6 = '6xl',
}

export type ThemeFontSizesValues = keyof typeof FONT_SIZES | (string & {}) | (number & {})

const typography = {
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  fontWeights: FONT_WEIGHTS,
  fonts: FONT_FAMILIES,
  fontSizes: FONT_SIZES,
} as const

export default typography
