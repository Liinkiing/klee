import { themeGet } from '@styled-system/theme-get'

import { ThemeColorsValues } from '../styles/modules/colors'
import { useTheme } from './useTheme'

export const useColor = (token: ThemeColorsValues, fallback?: ThemeColorsValues): string => {
  const theme = useTheme()
  return themeGet(`colors.${token}`, fallback)({ theme })
}

export const useColors = (...tokens: ThemeColorsValues[]): string[] => {
  const theme = useTheme()
  return tokens.map(token => themeGet(`colors.${token}`)({ theme }))
}
