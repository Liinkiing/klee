import { AppColorScheme } from '../../components/color-mode-provider/context'
import colors from '../modules/colors'

export const MODES: Record<AppColorScheme, Partial<Record<keyof typeof colors | string, unknown>>> = {
  dark: {
    text: 'whitesmoke',
    background: '#1f1d2c',
    menu: {
      background: '#29263e',
      borderColor: '#625e80',
    },
  },
  light: {
    text: '#18181b',
    background: '#fff',
    menu: {
      background: '#fff',
      borderColor: colors['cool-gray'][100],
    },
  },
}
