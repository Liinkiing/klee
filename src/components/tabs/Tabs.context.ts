import * as React from 'react'
import { useTabState } from 'reakit/Tab'

export type TabsVariant = 'line' | 'rounded'
export type TabsAlign = 'start' | 'center' | 'end'
export type TabsOrientation = 'horizontal' | 'vertical'

export type Context = {
  tabs: ReturnType<typeof useTabState>
  colorScheme: string
  stretch: boolean
  align: TabsAlign
  variant: TabsVariant
  orientation: TabsOrientation
}

export const TabsContext = React.createContext<Context | undefined>(undefined)

export const useTabs = (): Context => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(`You can't use the TabsContext outsides a Menu component.`)
  }
  return context
}
