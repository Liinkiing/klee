import { TippyProps } from '@tippyjs/react/headless'
import * as React from 'react'
import type { MenuStateReturn } from 'reakit/Menu'

export interface Context {
  readonly reakitMenu: MenuStateReturn
  readonly placement: TippyProps['placement']
  readonly hideOnClickOutside: boolean
  readonly closeOnSelect: boolean
}

export const MenuContext = React.createContext<Context | undefined>(undefined)

export const useMenu = (): Context => {
  const context = React.useContext(MenuContext)
  if (!context) {
    throw new Error(`You can't use the MenuContext outsides a Menu component.`)
  }
  return context
}
