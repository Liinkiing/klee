import React, { FC, useEffect, useMemo } from 'react'
import { TabInitialState, useTabState } from 'reakit/Tab'
import { Context, TabsAlign, TabsContext, TabsOrientation, TabsVariant } from './Tabs.context'
import { BoxProps } from '../primitives/Box'
import TabPanels from './TabPanels'
import TabPanel from './TabPanel'
import TabList from './TabList'
import Tab from './Tab'
import { KleeFontFamily } from '../../styles/theme/typography'
import { Flex } from '../layout/Flex'

export interface TabsProps extends Pick<TabInitialState, 'selectedId'>, Omit<BoxProps, 'onChange'> {
  readonly onChange?: (tabId: string) => void
  readonly stretch?: boolean
  readonly align?: TabsAlign
  readonly variant?: TabsVariant
  readonly orientation?: TabsOrientation
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
  orientation = 'horizontal',
  align = 'start',
  stretch = false,
  colorScheme = 'blue',
  variant = 'line',
  ...props
}) => {
  const tabs = useTabState({
    selectedId,
    orientation,
  })
  const context = useMemo<Context>(() => ({ tabs, colorScheme, variant, stretch, align, orientation }), [
    ...Object.values(tabs),
    align,
    stretch,
    colorScheme,
    variant,
    orientation,
  ])

  useEffect(() => {
    if (tabs.selectedId) {
      onChange?.(tabs.selectedId)
    }
  }, [tabs.selectedId, onChange])

  return (
    <TabsContext.Provider value={context}>
      <Flex fontFamily={KleeFontFamily.Body} direction={orientation === 'horizontal' ? 'column' : 'row'} {...props}>
        {children}
      </Flex>
    </TabsContext.Provider>
  )
}

Tabs.displayName = 'Tabs'

Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panels = TabPanels
Tabs.Panel = TabPanel

export default Tabs
