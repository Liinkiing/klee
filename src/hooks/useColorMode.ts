import { useContext } from 'react'

import { ColorModeContext } from '../components/color-mode-provider/context'

export const useColorMode = () => {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('You must wrap your application within a `ColorModeProvider` component to use the color mode!')
  }

  return [context.currentMode, context.changeCurrentMode] as const
}
