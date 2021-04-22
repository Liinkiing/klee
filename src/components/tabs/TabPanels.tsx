import React, { FC } from 'react'

import { Box, BoxProps } from '../primitives/Box'

export interface TabPanelsProps extends BoxProps {}

export const TabPanels: FC<TabPanelsProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

TabPanels.displayName = 'Tab.Panels'

export default TabPanels
