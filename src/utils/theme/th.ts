import get from 'lodash/get'

import colors, { ThemeColorsValues } from '../../styles/modules/colors'
import { BORDERS, RADII, SHADOWS, SPACING, Z_INDICES } from '../../styles/theme'
import { FONT_FAMILIES, FONT_SIZES, FONT_WEIGHTS, LETTER_SPACINGS, LINE_HEIGHTS } from '../../styles/theme/typography'

export const th = {
  border<T extends keyof typeof BORDERS>(value: T): typeof BORDERS[T] {
    return BORDERS[value]
  },
  letterSpacing<T extends keyof typeof LETTER_SPACINGS>(value: T): typeof LETTER_SPACINGS[T] {
    return LETTER_SPACINGS[value]
  },
  font<T extends keyof typeof FONT_FAMILIES>(value: T): typeof FONT_FAMILIES[T] {
    return FONT_FAMILIES[value]
  },
  fontSize<T extends keyof typeof FONT_SIZES>(value: T): typeof FONT_SIZES[T] {
    return FONT_SIZES[value]
  },
  fontWeight<T extends keyof typeof FONT_WEIGHTS>(value: T): typeof FONT_WEIGHTS[T] {
    return FONT_WEIGHTS[value]
  },
  lineHeight<T extends keyof typeof LINE_HEIGHTS>(value: T): typeof LINE_HEIGHTS[T] {
    return LINE_HEIGHTS[value]
  },
  radius<T extends keyof typeof RADII>(value: T): typeof RADII[T] {
    return RADII[value]
  },
  shadow<T extends keyof typeof SHADOWS>(value: T): typeof SHADOWS[T] {
    return SHADOWS[value]
  },
  zIndex<T extends keyof typeof Z_INDICES>(value: T): typeof Z_INDICES[T] {
    return Z_INDICES[value]
  },
  color(path: ThemeColorsValues, fallback?: string): string {
    return get(colors, path) ?? fallback
  },
  space<T extends keyof typeof SPACING>(value: T): typeof SPACING[T] {
    return SPACING[value]
  },
} as const
