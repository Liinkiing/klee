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
    drawer: {
      borderColor: '#44415a',
    },
    menu: {
      background: '#29263e',
      borderColor: '#625e80',
      optionGroup: {
        background: '#4e4a6c',
        borderColor: '#28263b',
      },
    },
    modal: {
      background: '#28263b',
    },
    popover: {
      background: '#28263b',
    },
    tabs: {
      list: {
        borderColor: '#625e80',
      },
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
    drawer: {
      borderColor: colors['cool-gray'][100],
    },
    menu: {
      background: '#fff',
      borderColor: colors['cool-gray'][300],
      optionGroup: {
        background: colors['cool-gray'][100],
        borderColor: colors['cool-gray'][300],
      },
    },
    modal: {
      background: '#fff',
    },
    popover: {
      background: '#fff',
    },
    tabs: {
      list: {
        borderColor: colors['cool-gray'][200],
      },
    },
  },
}
