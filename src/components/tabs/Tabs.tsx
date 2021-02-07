import React, { FC, useEffect, useMemo } from 'react'
import { useTabState, TabInitialState } from 'reakit'
import { Context, TabsAlign, TabsContext, TabsVariant } from './Tabs.context'
import Box, { BoxProps } from '../primitives/Box'
import TabPanels from './TabPanels'
import TabPanel from './TabPanel'
import TabList from './TabList'

import Tab from './Tab'
import { KleeFontFamily } from '../../styles/theme/typography'

export interface TabsProps extends Pick<TabInitialState, 'selectedId'>, Omit<BoxProps, 'onChange'> {
  readonly onChange?: (tabId: string) => void
  readonly stretch?: boolean
  readonly align?: TabsAlign
  readonly variant?: TabsVariant
  readonly colorScheme?: string
}

type SubComponents = {
  List: typeof TabList
  Tab: typeof Tab
  Panels: typeof TabPanels
  Panel: typeof TabPanel
}

export const Tabs: FC<TabsProps> & SubComponents = ({
  children,
  selectedId,
  onChange,
  align = 'start',
  stretch = false,
  colorScheme = 'blue',
  variant = 'line',
  ...props
}) => {
  const tabs = useTabState({
    selectedId,
  })
  const context = useMemo<Context>(() => ({ tabs, colorScheme, variant, stretch, align }), [
    ...Object.values(tabs),
    align,
    stretch,
    colorScheme,
    variant,
  ])

  useEffect(() => {
    if (tabs.selectedId) {
      onChange?.(tabs.selectedId)
    }
  }, [tabs.selectedId, onChange])

  return (
    <TabsContext.Provider value={context}>
      <Box fontFamily={KleeFontFamily.Body} {...props}>
        {children}
      </Box>
    </TabsContext.Provider>
  )
}

Tabs.displayName = 'Tabs'

Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panels = TabPanels
Tabs.Panel = TabPanel

export default Tabs
