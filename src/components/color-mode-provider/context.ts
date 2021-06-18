import { createContext, useContext } from 'react'

export type AppColorScheme = 'light' | 'dark'
export type Context = {
  readonly currentMode: AppColorScheme
  readonly changeCurrentMode: (newMode: AppColorScheme) => void
}

export const ColorModeContext = createContext<Context | undefined>(undefined)

export const useColorMode = () => {
  const context = useContext(ColorModeContext)
  if (!context) {
    throw new Error('You must wrap your application within a `ColorModeProvider` component to use the color mode!')
  }

  return [context.currentMode, context.changeCurrentMode] as const
}
