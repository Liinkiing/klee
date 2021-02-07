import React, { FC, useEffect, useRef, useState } from 'react'
import { TabsOrientation, TabsVariant, useTabs } from './Tabs.context'
import { Box, BoxProps } from '../primitives/Box'
import { Tab as BaseTab, TabProps as BaseTabProps } from 'reakit'
import { KleeFontWeight } from '../../styles/theme/typography'
import { BASE_FOCUS } from '../../styles/modules/mixins'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { KleeRadius } from '../../styles/theme'
import { Theme, useTheme } from '@emotion/react'
import { themeGet } from '@styled-system/theme-get'
import { variant } from 'styled-system'

export interface TabProps extends BoxProps, Pick<BaseTabProps, 'disabled' | 'focusable'> {}

const BorderBox = styled(motion.custom(Box))()

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
        bg: themeGet(`colors.${colorScheme}.700`, 'black')({ theme }),
      },
      rounded: {
        borderRadius: 'inherit',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 0,
        bg: themeGet(`colors.${colorScheme}.200`, 'transparent')({ theme }),
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
const tabVariants = ({ colorScheme, theme }: VariantArgs) =>
  variant<{}, TabsVariant>({
    variants: {
      line: {
        borderRadius: KleeRadius.None,
      },
      rounded: {
        borderRadius: KleeRadius.Xxxl,
        color: themeGet(`colors.${colorScheme}.900`, 'black')({ theme }),
      },
    },
  })

export const Tab: FC<TabProps> = ({ children, _focus, sx, _hover, ...props }) => {
  const { tabs, colorScheme, variant, orientation } = useTabs()
  const theme = useTheme()
  const [id, setId] = useState<string | undefined>(undefined)
  const $tab = useRef<HTMLElement>()
  useEffect(() => {
    if ($tab.current) {
      setId($tab.current.id)
    }
  }, [$tab.current])

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
        '&[aria-selected="false"]:hover': {
          opacity: 0.6,
        },
        ...sx,
      }}
      _focus={{
        ...BASE_FOCUS,
        ..._focus,
      }}
      {...{ variant }}
      _variants={tabVariants({ colorScheme, theme })}
      {...props}
    >
      <Box as="span" zIndex={1} position="relative">
        {children}
      </Box>
      {id === tabs.currentId && (
        <BorderBox
          layoutId="tabs-border-box"
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
