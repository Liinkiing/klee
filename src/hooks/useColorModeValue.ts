import { themeGet } from '@styled-system/theme-get'

import { ThemeColorsValues } from '../styles/modules/colors'
import { useTheme } from './useTheme'

export const useColorModeValue = (light: ThemeColorsValues, dark: ThemeColorsValues): string => {
  const theme = useTheme()
  if (theme.currentMode === 'light') {
    return themeGet(`colors.${light}`, light)({ theme })
  }

  return themeGet(`colors.${dark}`, dark)({ theme })
}
