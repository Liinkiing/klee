import React, { FC } from 'react'
import { TabsVariant, useTabs } from './Tabs.context'
import { Box, BoxProps } from '../primitives/Box'
import { TabList as BaseTabList } from 'reakit'
import { AnimateSharedLayout } from 'framer-motion'
import { variant } from 'styled-system'
import { KleeBorder } from '../../styles/theme'

export interface TabListProps extends BoxProps {
  readonly ariaLabel: string
}

const variants = variant<{}, TabsVariant>({
  variants: {
    line: {
      borderBottom: KleeBorder.Sm,
      borderColor: 'cool-gray.200',
    },
    rounded: {},
  },
})

export const TabList: FC<TabListProps> = ({ children, ariaLabel, ...props }) => {
  const { tabs, variant } = useTabs()
  return (
    <AnimateSharedLayout>
      <BaseTabList
        aria-label={ariaLabel}
        as={Box}
        display="flex"
        mb={3}
        {...tabs}
        {...{ variant }}
        _variants={variants}
        {...props}
      >
        {children}
      </BaseTabList>
    </AnimateSharedLayout>
  )
}

TabList.displayName = 'Tab.List'

export default TabList
