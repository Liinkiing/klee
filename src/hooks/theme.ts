import { themeGet } from '@styled-system/theme-get'

import { ThemeColorsValues } from '../styles/modules/colors'
import {
  KleeBorder,
  KleeRadius,
  KleeShadow,
  KleeZIndex,
  ThemeBordersValues,
  ThemeRadiiValues,
  ThemeShadowsValues,
  ThemeSpacingValues,
  ThemeZIndicesValues,
} from '../styles/theme'
import { useTheme } from './useTheme'

export const useColorModeValue = (light: ThemeColorsValues, dark: ThemeColorsValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`colors.${light}`, light)({ theme })
  }

  return themeGet(`colors.${dark}`, dark)({ theme })
}

export const useColor = (token: ThemeColorsValues, fallback?: ThemeColorsValues): string => {
  const theme = useTheme()
  return themeGet(`colors.${token}`, fallback)({ theme })
}

export const useColors = (...tokens: ThemeColorsValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`colors.${token}`)({ theme }))
}

export const useShadowModeValue = (
  light: ThemeShadowsValues | KleeShadow,
  dark: ThemeShadowsValues | KleeShadow,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`shadows.${light}`, light)({ theme })
  }

  return themeGet(`shadows.${dark}`, dark)({ theme })
}

export const useShadow = (
  token: ThemeShadowsValues | KleeShadow,
  fallback?: ThemeShadowsValues | KleeShadow,
): string => {
  const theme = useTheme()
  return themeGet(`shadows.${token}`, fallback)({ theme })
}

export const useShadows = (...tokens: (ThemeColorsValues | KleeShadow)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`shadows.${token}`)({ theme }))
}

export const useBorderModeValue = (
  light: ThemeBordersValues | KleeBorder,
  dark: ThemeBordersValues | KleeBorder,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`borders.${light}`, light)({ theme })
  }

  return themeGet(`borders.${dark}`, dark)({ theme })
}

export const useBorder = (
  token: ThemeBordersValues | KleeBorder,
  fallback?: ThemeBordersValues | KleeBorder,
): string => {
  const theme = useTheme()
  return themeGet(`borders.${token}`, fallback)({ theme })
}

export const useBorders = (...tokens: (ThemeBordersValues | KleeBorder)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`borders.${token}`)({ theme }))
}

export const useZIndexModeValue = (
  light: ThemeZIndicesValues | KleeZIndex,
  dark: ThemeZIndicesValues | KleeZIndex,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`zIndices.${light}`, light)({ theme })
  }

  return themeGet(`zIndices.${dark}`, dark)({ theme })
}

export const useZIndex = (
  token: ThemeZIndicesValues | KleeZIndex,
  fallback?: ThemeZIndicesValues | KleeZIndex,
): string => {
  const theme = useTheme()
  return themeGet(`zIndices.${token}`, fallback)({ theme })
}

export const useZIndices = (...tokens: (ThemeZIndicesValues | KleeZIndex)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`zIndices.${token}`)({ theme }))
}

export const useSpaceModeValue = (light: ThemeSpacingValues, dark: ThemeSpacingValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`space.${light}`, light)({ theme })
  }

  return themeGet(`space.${dark}`, dark)({ theme })
}

export const useSpace = (token: ThemeSpacingValues, fallback?: ThemeSpacingValues): string => {
  const theme = useTheme()
  return themeGet(`space.${token}`, fallback)({ theme })
}

export const useSpaces = (...tokens: ThemeSpacingValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`space.${token}`)({ theme }))
}

export const useSizeModeValue = (light: ThemeSpacingValues, dark: ThemeSpacingValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`sizes.${light}`, light)({ theme })
  }

  return themeGet(`sizes.${dark}`, dark)({ theme })
}

export const useSize = (token: ThemeSpacingValues, fallback?: ThemeSpacingValues): string => {
  const theme = useTheme()
  return themeGet(`sizes.${token}`, fallback)({ theme })
}

export const useSizes = (...tokens: ThemeSpacingValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`sizes.${token}`)({ theme }))
}

export const useRadiusModeValue = (
  light: ThemeRadiiValues | KleeRadius,
  dark: ThemeRadiiValues | KleeRadius,
): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`radii.${light}`, light)({ theme })
  }

  return themeGet(`radii.${dark}`, dark)({ theme })
}

export const useRadius = (token: ThemeRadiiValues | KleeRadius, fallback?: ThemeRadiiValues | KleeRadius): string => {
  const theme = useTheme()
  return themeGet(`radii.${token}`, fallback)({ theme })
}

export const useRadii = (...tokens: (ThemeRadiiValues | KleeRadius)[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`radii.${token}`)({ theme }))
}
