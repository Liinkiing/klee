import { useTheme as useEmotionTheme } from '@emotion/react'
import { KleeTheme } from '../styles/theme'

export const useTheme = (): KleeTheme => useEmotionTheme()
