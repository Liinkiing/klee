import * as React from 'react'
import { useTabState } from 'reakit'

export type TabsVariant = 'line' | 'rounded'

export type Context = {
  tabs: ReturnType<typeof useTabState>
  colorScheme: string
  variant: TabsVariant
}

export const TabsContext = React.createContext<Context | undefined>(undefined)

export const useTabs = (): Context => {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(`You can't use the TabsContext outsides a Menu component.`)
  }
  return context
}
