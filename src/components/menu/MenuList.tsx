import * as React from 'react'
import { FC } from 'react'
import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { BoxProps } from '../primitives/Box'
import { CommonProps } from './common'
import Flex from '../layout/Flex'
import { useMenu } from './Menu.context'
import { ease } from '../../utils/motion'
import { KleeFontSize } from '../../styles/theme/typography'
import { KleeBorder, KleeRadius, KleeShadow, KleeZIndex } from '../../styles/theme'
import { Menu } from 'reakit/Menu'
import { TRANSITION_DURATION } from './Menu'

export type MenuListProps = Omit<BoxProps, 'children'> &
  CommonProps &
  (
    | {
        ariaLabel: string
        ariaLabelledby?: never
      }
    | {
        ariaLabel?: never
        ariaLabelledby: string
      }
  )

const MenuItems = styled(motion(Flex))`
  &:active,
  &:focus {
    outline: none;
  }
`

const MenuList = forwardRef<HTMLElement, MenuListProps>(({ children, ariaLabel, ariaLabelledby, ...props }, ref) => {
  const { reakitMenu, hideOnClickOutside } = useMenu()
  const label = ariaLabel ?? props['aria-label'] ?? undefined
  const labelledby = ariaLabelledby ?? props['aria-labelledby'] ?? undefined
  return (
    <AnimatePresence>
      {reakitMenu.visible && (
        <Menu
          aria-label={label}
          aria-labelledby={labelledby}
          hideOnClickOutside={hideOnClickOutside}
          {...reakitMenu}
          style={{ outline: 'none', transformOrigin: 'top left' }}
          as={MenuItems}
          ref={ref}
          direction="column"
          minWidth="200px"
          bg="white"
          boxShadow={KleeShadow.Lg}
          border={KleeBorder.Xs}
          fontSize={KleeFontSize.Sm}
          borderColor="cool-gray.200"
          borderRadius={KleeRadius.Lg}
          zIndex={KleeZIndex.Dropdown}
          overflow="hidden"
          {...props}
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: TRANSITION_DURATION, ease }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
        >
          {children}
        </Menu>
      )}
    </AnimatePresence>
  )
}) as FC<MenuListProps>

MenuList.displayName = 'Menu.List'

export default MenuList
