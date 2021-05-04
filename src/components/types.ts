import { KleeTheme } from '../styles/theme'

export interface ShowableOnCreate {
  /**
   * When `true`, the component will be initially visible
   */
  readonly showOnCreate?: boolean
}

export interface ColorSchemable {
  /**
   * @default blue
   */
  readonly colorScheme?: keyof KleeTheme['colors'] | string
}
