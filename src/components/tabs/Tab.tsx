import { Theme, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { motion } from 'framer-motion'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Tab as BaseTab, TabProps as BaseTabProps } from 'reakit/Tab'
import { variant } from 'styled-system'

import { BASE_FOCUS } from '../../styles/modules/mixins'
import { KleeRadius } from '../../styles/theme'
import { KleeFontWeight } from '../../styles/theme/typography'
import { Box, BoxProps } from '../primitives/Box'
import { TabsOrientation, TabsVariant, useTabs } from './Tabs.context'

export interface TabProps extends BoxProps, Pick<BaseTabProps, 'disabled' | 'focusable'> {}

const BorderBox = styled(motion(Box))()

type VariantArgs = { theme: Theme; colorScheme: string }

const borderBoxVariants = ({ colorScheme, theme, variant: tabVariant }: VariantArgs & { variant: TabsVariant }) => [
  variant<{}, TabsVariant>({
    variants: {
      line: {
        borderRadius: KleeRadius.None,
        bottom: '-2px',
        left: '25%',
        width: '50%',
        height: '2px',
        bg:
          theme.currentMode === 'light'
            ? themeGet(`colors.${colorScheme}.400`, 'text')({ theme })
            : themeGet(`colors.${colorScheme}.500`, 'text')({ theme }),
      },
      rounded: {
        borderRadius: 'inherit',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 0,
        bg:
          theme.currentMode === 'light'
            ? themeGet(`colors.${colorScheme}.200`, 'transparent')({ theme })
            : themeGet(`colors.${colorScheme}.400`, 'transparent')({ theme }),
      },
    },
  }),
  variant<{}, TabsOrientation>({
    prop: 'variantOrientation',
    variants: {
      horizontal: {},
      vertical:
        tabVariant === 'line'
          ? {
              left: 'unset',
              bottom: 0,
              right: '-2px',
              width: '2px',
              height: '100%',
              top: 0,
            }
          : {},
    },
  }),
]
const tabVariants = variant<{}, TabsVariant>({
  variants: {
    line: {
      borderRadius: KleeRadius.None,
      color: 'text',
    },
    rounded: {
      borderRadius: KleeRadius.Xxxl,
      color: 'text',
    },
  },
})

export const Tab: FC<TabProps> = ({ children, _focus, sx, _hover, _selected, _disabled, ...props }) => {
  const { tabs, colorScheme, variant, orientation } = useTabs()
  const theme = useTheme()
  const [id, setId] = useState<string | undefined>(undefined)
  const $tab = useRef<HTMLElement>()
  useEffect(() => {
    if ($tab.current) {
      setId($tab.current.id)
    }
  }, [])

  return (
    <BaseTab
      as={Box}
      ref={$tab}
      {...tabs}
      position="relative"
      fontWeight={KleeFontWeight.Semibold}
      p={2}
      px={4}
      className="tab"
      _hover={{
        cursor: 'pointer',
        ..._hover,
      }}
      sx={{
        transition: 'box-shadow 0.2s, opacity 0.2s',
        '&[aria-selected="false"]': {
          color: 'text',
        },
        '&[aria-selected="false"]:hover': {
          opacity: 0.6,
        },
        ...sx,
      }}
      _focus={{
        ...BASE_FOCUS,
        ..._focus,
      }}
      _disabled={{
        opacity: 0.5,
        ..._disabled,
      }}
      _selected={{
        ..._selected,
        '& .tab--border-box': {
          ..._selected,
        },
      }}
      {...{ variant }}
      _variants={tabVariants}
      {...props}
    >
      <Box as="span" zIndex={1} position="relative">
        {children}
      </Box>
      {id === tabs.currentId && (
        <BorderBox
          layoutId="tabs-border-box"
          className="tab--border-box"
          transition={{ type: 'spring', damping: 30, stiffness: 500 }}
          position="absolute"
          {...{ variant, variantOrientation: orientation }}
          _variants={borderBoxVariants({ colorScheme, theme, variant })}
        />
      )}
    </BaseTab>
  )
}

Tab.displayName = 'Tab'

export default Tab
