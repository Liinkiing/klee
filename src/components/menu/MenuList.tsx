import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import * as React from 'react'
import { FC, forwardRef } from 'react'
import { Menu } from 'reakit/Menu'

import { useShadowModeValue } from '../../hooks'
import { KleeBorder, KleeRadius, KleeShadow, KleeZIndex } from '../../styles/theme'
import { KleeFontSize } from '../../styles/theme/typography'
import { ease, MENU_TRANSITION_DURATION } from '../../utils/motion'
import Flex from '../layout/Flex'
import { Box } from '../primitives'
import { BoxProps } from '../primitives/Box'
import { useMenu } from './Menu.context'
import { CommonProps } from './common'

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
    <MenuItems
      style={{ outline: 'none' }}
      variants={{
        hidden: { opacity: 0, y: -10, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={reakitMenu.visible ? 'visible' : 'hidden'}
      transition={{ duration: MENU_TRANSITION_DURATION, ease }}
    >
      <Menu
        style={{ outline: 'none' }}
        aria-label={label}
        aria-labelledby={labelledby}
        hideOnClickOutside={hideOnClickOutside}
        as={Box}
        {...reakitMenu}
        ref={ref}
        direction="column"
        minWidth="200px"
        bg="menu.background"
        boxShadow={useShadowModeValue(KleeShadow.Lg, KleeShadow.DarkLg)}
        border={KleeBorder.Xs}
        fontSize={KleeFontSize.Sm}
        borderColor="menu.borderColor"
        borderRadius={KleeRadius.Lg}
        zIndex={KleeZIndex.Dropdown}
        overflow="hidden"
        {...props}
      >
        {children}
      </Menu>
    </MenuItems>
  )
}) as FC<MenuListProps>

MenuList.displayName = 'Menu.List'

export default MenuList
