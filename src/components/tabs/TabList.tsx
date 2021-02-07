import React, { CSSProperties, FC } from 'react'
import { TabsAlign, TabsOrientation, TabsVariant, useTabs } from './Tabs.context'
import { Box, BoxProps } from '../primitives/Box'
import { TabList as BaseTabList } from 'reakit'
import { AnimateSharedLayout } from 'framer-motion'
import { variant } from 'styled-system'
import { KleeBorder } from '../../styles/theme'

export interface TabListProps extends BoxProps {
  readonly ariaLabel: string
}

const variants = [
  variant<{}, TabsVariant>({
    variants: {
      line: {
        borderBottom: KleeBorder.Sm,
        borderRight: KleeBorder.Sm,
        borderBottomColor: 'cool-gray.200',
        borderRightColor: 'cool-gray.200',
      },
      rounded: {},
    },
  }),
  variant<{}, TabsOrientation>({
    prop: 'variantOrientation',
    variants: {
      horizontal: {
        mb: 3,
        borderRight: KleeBorder.None,
        flexDirection: 'row',
      },
      vertical: {
        borderBottom: KleeBorder.None,
        mr: 3,
        flexDirection: 'column',
      },
    },
  }),
]
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
  const { tabs, variant, stretch, align, orientation } = useTabs()
  return (
    <AnimateSharedLayout>
      <BaseTabList
        aria-label={ariaLabel}
        as={Box}
        display="flex"
        textAlign={stretch ? 'center' : undefined}
        justifyContent={getAlign(align)}
        {...tabs}
        {...{ variant, variantOrientation: orientation }}
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
