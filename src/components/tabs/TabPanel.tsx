import React, { FC } from 'react'
import { useTabs } from './Tabs.context'
import { Box, BoxProps } from '../primitives/Box'
import { TabPanel as BaseTabPanel } from 'reakit/Tab'

export interface TabPanelProps extends BoxProps {}

export const TabPanel: FC<TabPanelProps> = ({ children, _focus, ...props }) => {
  const { tabs } = useTabs()
  return (
    <BaseTabPanel as={Box} {...tabs} tabIndex={undefined} {...props}>
      {children}
    </BaseTabPanel>
  )
}

TabPanel.displayName = 'Tab.Panel'

export default TabPanel
