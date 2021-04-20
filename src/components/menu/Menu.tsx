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
import { MenuInitialState, useMenuState, MenuProps as ReakitMenuProps } from 'reakit'
import { Context, MenuContext } from './Menu.context'
import { KleeZIndex, Z_INDICES } from '../../styles/theme'

export interface MenuProps
  extends CommonProps,
    Partial<Pick<TippyProps, 'placement'>>,
    Pick<MenuInitialState, 'loop'>,
    Pick<ReakitMenuProps, 'hideOnClickOutside'> {
  /**
   * When enabled, the menu will auto close itself after you've selected a choice. It can also be enabled on a
   * per-instance of a `Menu.ListItem`
   */
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

const Menu: FC<MenuProps> & SubComponents = ({
  placement = 'bottom-start',
  closeOnSelect = true,
  loop = false,
  hideOnClickOutside = true,
  children,
}) => {
  const button = React.Children.toArray(children).find((c: any) => c.type === MenuButton) as ReactElement
  const list = React.Children.toArray(children).find((c: any) => c.type === MenuList) as ReactElement
  const menu = useMenuState({ animated: TRANSITION_DURATION * 1000, loop })
  const context = useMemo<Context>(() => ({ reakitMenu: menu, closeOnSelect, hideOnClickOutside }), [
    menu,
    closeOnSelect,
    hideOnClickOutside,
  ])
  return (
    <MenuContext.Provider value={context}>
      <Box position="relative" display="inline-block">
        <Tippy
          zIndex={Z_INDICES[KleeZIndex.Dropdown]}
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
