import { themeGet } from '@styled-system/theme-get'

import { useColorMode } from '../components/color-mode-provider/context'
import { ThemeColorsValues } from '../styles/modules/colors'
import { useTheme } from './useTheme'

export const useColorModeValue = (light: ThemeColorsValues, dark: ThemeColorsValues): string => {
  const [colorMode] = useColorMode()
  const theme = useTheme()
  if (colorMode === 'light') {
    return themeGet(`colors.${light}`, light)({ theme })
  }

  return themeGet(`colors.${dark}`, dark)({ theme })
}
