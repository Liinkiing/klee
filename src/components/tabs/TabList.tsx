import React, { CSSProperties, FC } from 'react'
import { TabsAlign, TabsVariant, useTabs } from './Tabs.context'
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

const getAlign = (align: TabsAlign): CSSProperties['justifyContent'] => {
  switch (align) {
    default:
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
  }
}

export const TabList: FC<TabListProps> = ({ children, ariaLabel, ...props }) => {
  const { tabs, variant, stretch, align } = useTabs()
  return (
    <AnimateSharedLayout>
      <BaseTabList
        aria-label={ariaLabel}
        as={Box}
        display="flex"
        textAlign={stretch ? 'center' : undefined}
        justifyContent={getAlign(align)}
        mb={3}
        {...tabs}
        {...{ variant }}
        _variants={variants}
        sx={
          stretch
            ? {
                '& .tab': {
                  flex: 1,
                },
              }
            : {}
        }
        {...props}
      >
        {children}
      </BaseTabList>
    </AnimateSharedLayout>
  )
}

TabList.displayName = 'Tab.List'

export default TabList
