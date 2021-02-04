import * as FiIcons from 'react-icons/fi'

export const ICON_CONTROL = {
  control: {
    type: 'select',
    options: Object.entries(FiIcons).map(([moduleName]) => moduleName),
  },
  __ICONS: FiIcons as any,
} as const
