import { useCallback, useContext } from 'react'

import { ColorModeContext } from '../components/color-mode-provider/context'

export const useColorMode = () => {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('You must wrap your application within a `ColorModeProvider` component to use the color mode!')
  }
  const { currentMode, changeCurrentMode } = context

  const toggleMode = useCallback(() => {
    if (currentMode === 'light') {
      changeCurrentMode('dark')
    } else {
      changeCurrentMode('light')
    }
  }, [currentMode, changeCurrentMode])

  return {
    mode: currentMode,
    changeMode: changeCurrentMode,
    toggleMode: toggleMode,
  } as const
}
