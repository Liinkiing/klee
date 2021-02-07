import type { Theme } from '@emotion/react'
import type { Breakpoints } from '../../@types/@emotion/react'
import typography from './typography'
import colors from '../modules/colors'

/* eslint-disable @typescript-eslint/ban-types */

// Some values comes from chakra-ui, a great UI library!

export const theme = <Props extends { theme: Theme }>(props: Props) => props.theme

export const BR_TABLET = 720
export const BR_DESKTOP = 1024
export const BR_WIDE = 1800
export const BR_ULTRAWIDE = 2200

export const breakpoints: Breakpoints = {
  tablet: `${BR_TABLET}px`,
  desktop: `${BR_DESKTOP}px`,
  wide: `${BR_WIDE}px`,
  ultraWide: `${BR_ULTRAWIDE}px`,
}

export const SPACING = {
  px: '1px',
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '3rem',
  12: '3.5rem',
  13: '4rem',
  14: '5rem',
  15: '6rem',
  16: '7rem',
  17: '8rem',
  18: '9rem',
  19: '10rem',
  20: '11rem',
  21: '12rem',
  22: '13rem',
  23: '14rem',
  24: '15rem',
  25: '16rem',
  26: '18rem',
  27: '20rem',
  28: '24rem',
} as const

export type ThemeSpacingValues = keyof typeof SPACING | (string & {}) | (number & {})

export const SHADOWS = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  'dark-lg': 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
} as const

export enum KleeShadow {
  Xs = 'xs',
  Sm = 'sm',
  Base = 'base',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  '2xl' = '2xl',
  Outline = 'outline',
  Inner = 'inner',
  None = 'none',
  DarkLg = 'dark-lg',
}

export type ThemeShadowsValues = keyof typeof SHADOWS | (string & {})

export const RADII = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const

export enum KleeRadius {
  None = 'none',
  Sm = 'sm',
  Base = 'base',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Xxl = '2xl',
  Xxxl = '3xl',
  Full = 'full',
}

export type ThemeRadiiValues = keyof typeof RADII | (string & {}) | (number & {})

export const BORDERS = {
  none: 'none',
  xs: '1px solid',
  sm: '2px solid',
  md: '4px solid',
  lg: '10px solid',
} as const

export enum KleeBorder {
  None = 'none',
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}

export type ThemeBordersValues = keyof typeof BORDERS | (string & {})

export const Z_INDICES = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
} as const

export enum KleeZIndex {
  Hide = 'hide',
  Auto = 'auto',
  Base = 'base',
  Docked = 'docked',
  Dropdown = 'dropdown',
  Sticky = 'sticky',
  Banner = 'banner',
  Overlay = 'overlay',
  Modal = 'modal',
  Popover = 'popover',
  Toast = 'toast',
  Tooltip = 'tooltip',
}

export type ThemeZIndicesValues = keyof typeof Z_INDICES | (string & {}) | (number & {})

export const kleeTheme: Theme = {
  ...typography,
  colors: colors as any,
  breakpoints: [breakpoints.tablet, breakpoints.desktop, breakpoints.wide, breakpoints.ultraWide],
  mediaQueries: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
    ultraWide: `@media screen and (min-width: ${breakpoints.ultraWide})`,
  },
  space: SPACING,
  sizes: SPACING,
  radii: RADII,
  borders: BORDERS,
  shadows: SHADOWS,
  zIndices: Z_INDICES,
}
