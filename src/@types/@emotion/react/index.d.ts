import '@emotion/react'
import { KleeTheme } from '../../../styles/theme'

declare module '@emotion/react' {
  export interface Theme extends KleeTheme {}
}
