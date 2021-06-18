import { createContext } from 'react'

export type AppColorScheme = 'light' | 'dark'
export type Context = {
  readonly currentMode: AppColorScheme
  readonly changeCurrentMode: (newMode: AppColorScheme) => void
}

export const ColorModeContext = createContext<Context | undefined>(undefined)
