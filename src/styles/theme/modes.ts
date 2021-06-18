import { AppColorScheme } from '../../components/color-mode-provider/context'
import colors from '../modules/colors'

export const MODES: Record<AppColorScheme, Partial<Record<keyof typeof colors | string, unknown>>> = {
  dark: {
    text: 'whitesmoke',
    background: '#1f1d2c',
    input: {
      addons: {
        background: colors['cool-gray'][300],
        color: colors['cool-gray'][700],
      },
    },
    menu: {
      background: '#29263e',
      borderColor: '#625e80',
    },
    modal: {
      background: '#28263b',
    },
  },
  light: {
    text: '#18181b',
    background: '#fff',
    input: {
      addons: {
        background: colors['cool-gray'][100],
        color: colors['cool-gray'][600],
      },
    },
    menu: {
      background: '#fff',
      borderColor: colors['cool-gray'][100],
    },
    modal: {
      background: '#fff',
    },
  },
}
