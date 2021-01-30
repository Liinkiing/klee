import * as React from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import Tippy from '@tippyjs/react/headless'
import { Placement } from 'tippy.js'
import MenuButton, { MENU_BUTTON_TYPE } from './MenuButton'
import MenuDivider from './MenuDivider'
import MenuListItem from './MenuListItem'
import MenuOptionGroup from './MenuOptionGroup'
import MenuOptionItem from './MenuOptionItem'
import { Context, MenuContext } from './Menu.context'
import Box from '../primitives/Box'
import { FC, ReactNode } from 'react'
import MenuList, { MENU_LIST_TYPE } from './MenuList'
import { CommonProps } from './common'

export interface MenuProps extends CommonProps {
  readonly closeOnSelect?: boolean
  readonly placement?: Placement
}

const Provider = ({ context: { open, closeOnSelect }, children }: { context: Context; children: ReactNode }) => (
  <MenuContext.Provider value={{ open, closeOnSelect }}>
    {typeof children === 'function' ? children({ open }) : children}
  </MenuContext.Provider>
)

type SubComponents = {
  Button: typeof MenuButton
  List: typeof MenuList
  ListItem: typeof MenuListItem
  Divider: typeof MenuDivider
  OptionGroup: typeof MenuOptionGroup
  OptionItem: typeof MenuOptionItem
}

const Menu: FC<MenuProps> & SubComponents = ({ placement = 'bottom-end', closeOnSelect = true, children }) => {
  const button = React.Children.toArray(children).find(c => (c as any).type.name === MENU_BUTTON_TYPE) as any
  const list = React.Children.toArray(children).find(c => (c as any).type.name === MENU_LIST_TYPE) as any

  return (
    <Box position="relative" display="inline-block">
      <HeadlessMenu>
        {({ open }) => (
          <Provider context={{ open, closeOnSelect }}>
            <Tippy
              placement={placement}
              render={attrs => (list ? React.cloneElement(list, attrs) : null)}
              animation
              trigger="click"
              popperOptions={{
                strategy: 'fixed',
              }}
            >
              {button}
            </Tippy>
          </Provider>
        )}
      </HeadlessMenu>
    </Box>
  )
}

Menu.displayName = 'Menu'

Menu.Button = MenuButton
Menu.List = MenuList
Menu.ListItem = MenuListItem
Menu.Divider = MenuDivider
Menu.OptionGroup = MenuOptionGroup
Menu.OptionItem = MenuOptionItem

export default Menu
