import { themeGet } from '@styled-system/theme-get'
import { ResponsiveValue } from 'styled-system'

import { BoxProps } from '../components'
import { useTheme } from './useTheme'

type Options = { colorScheme: string; shading?: number; fallback?: string }

export const useColorScheme = ({ colorScheme, shading = 100, fallback = 'black' }: Options): string => {
  const theme = useTheme()
  return themeGet(`colors.${colorScheme}.${shading}`, fallback)({ theme })
}

export const useMultipleColorScheme = <T extends Partial<Record<keyof BoxProps, Options | Options[]>>>(
  mapping: T,
): Record<keyof T, ResponsiveValue<any>> => {
  const theme = useTheme()
  let result: T = { ...mapping }
  for (const prop in mapping) {
    if (mapping.hasOwnProperty(prop)) {
      const index = prop as keyof BoxProps
      const value = mapping[index]
      if (!value) continue
      if (Array.isArray(value)) {
        result[index] = value.map(option =>
          themeGet(`colors.${option.colorScheme}.${option.shading}`, option.fallback)({ theme }),
        )
      } else {
        result[prop] = themeGet(`colors.${value.colorScheme}.${value.shading}`, value.fallback)({ theme })
      }
    }
  }

  return result
}
