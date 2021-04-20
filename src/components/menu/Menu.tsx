import * as React from 'react'
import Tippy, { TippyProps } from '@tippyjs/react/headless'
import MenuButton from './MenuButton'
import MenuDivider from './MenuDivider'
import MenuListItem from './MenuListItem'
import MenuOptionGroup from './MenuOptionGroup'
import MenuOptionItem from './MenuOptionItem'
import Box from '../primitives/Box'
import { FC, ReactElement, useMemo } from 'react'
import MenuList from './MenuList'
import { CommonProps } from './common'
import { useMenuState } from 'reakit'
import { Context, MenuContext } from './Menu.context'

export interface MenuProps extends CommonProps, Partial<Pick<TippyProps, 'placement'>> {
  readonly closeOnSelect?: boolean
}

type SubComponents = {
  Button: typeof MenuButton
  List: typeof MenuList
  ListItem: typeof MenuListItem
  Divider: typeof MenuDivider
  OptionGroup: typeof MenuOptionGroup
  OptionItem: typeof MenuOptionItem
}

const TRANSITION_DURATION = 0.2

const Menu: FC<MenuProps> & SubComponents = ({ placement = 'bottom-start', closeOnSelect = true, children }) => {
  const button = React.Children.toArray(children).find((c: any) => c.type === MenuButton) as ReactElement
  const list = React.Children.toArray(children).find((c: any) => c.type === MenuList) as ReactElement
  const menu = useMenuState({ animated: TRANSITION_DURATION * 1000 })
  const context = useMemo<Context>(() => ({ ...menu, closeOnSelect }), [menu, closeOnSelect])
  console.log({ context })
  return (
    <MenuContext.Provider value={context}>
      <Box position="relative" display="inline-block">
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
      </Box>
    </MenuContext.Provider>
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
