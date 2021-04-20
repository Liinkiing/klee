import * as React from 'react'
import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { BoxProps } from '../primitives/Box'
import { CommonProps } from './common'
import Flex from '../layout/Flex'
import { useMenu } from './Menu.context'
import { LAYOUT_TRANSITION_SPRING } from '../../utils/motion'
import { KleeFontSize } from '../../styles/theme/typography'
import { KleeBorder, KleeRadius, KleeShadow, KleeZIndex } from '../../styles/theme'
import { Menu } from 'reakit'

export interface MenuListProps extends Omit<BoxProps, 'children'>, CommonProps {
  readonly align?: 'left' | 'right'
}

export const MENU_LIST_TYPE: 'MenuList' = 'MenuList'

const MenuItems = styled(motion(Flex))`
  &:active,
  &:focus {
    outline: none;
  }
`

const MenuList = forwardRef<HTMLElement, MenuListProps>(({ children, align = 'right', ...props }, ref) => {
  const menu = useMenu()
  return (
    <AnimatePresence>
      {menu.visible && (
        <Menu
          ref={ref}
          {...menu}
          as={MenuItems}
          direction="column"
          minWidth="200px"
          bg="white"
          boxShadow={KleeShadow.Lg}
          mt={2}
          border={KleeBorder.Xs}
          fontSize={KleeFontSize.Sm}
          borderColor="cool-gray.200"
          borderRadius={KleeRadius.Lg}
          zIndex={KleeZIndex.Dropdown}
          overflow="hidden"
          {...props}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={LAYOUT_TRANSITION_SPRING}
          exit={{ opacity: 0, y: -10 }}
        >
          {children}
        </Menu>
      )}
    </AnimatePresence>
  )
})

MenuList.displayName = 'Menu.List'

export default MenuList
