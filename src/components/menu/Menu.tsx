import Tippy, { TippyProps } from '@tippyjs/react/headless'
import * as React from 'react'
import { FC, ReactElement, useMemo } from 'react'
import { MenuInitialState, useMenuState, MenuProps as ReakitMenuProps } from 'reakit/Menu'

import { KleeZIndex, Z_INDICES } from '../../styles/theme'
import { MENU_TRANSITION_DURATION } from '../../utils/motion'
import Box from '../primitives/Box'
import { ShowableOnCreate } from '../types'
import { Context, MenuContext } from './Menu.context'
import MenuButton from './MenuButton'
import MenuDivider from './MenuDivider'
import MenuList from './MenuList'
import MenuListItem from './MenuListItem'
import MenuOptionGroup from './MenuOptionGroup'
import MenuOptionItem from './MenuOptionItem'
import { CommonProps } from './common'

export interface MenuProps
  extends CommonProps,
    ShowableOnCreate,
    Partial<Pick<TippyProps, 'placement'>>,
    Partial<Pick<MenuInitialState, 'loop'>>,
    Partial<Pick<ReakitMenuProps, 'hideOnClickOutside'>> {
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

const Menu: FC<MenuProps> & SubComponents = ({
  placement = 'bottom-start',
  closeOnSelect = true,
  loop = false,
  hideOnClickOutside = true,
  showOnCreate = false,
  children,
}) => {
  const button = React.Children.toArray(children).find((c: any) => c.type === MenuButton) as ReactElement
  const list = React.Children.toArray(children).find((c: any) => c.type === MenuList) as ReactElement
  const menu = useMenuState({ animated: MENU_TRANSITION_DURATION * 1000, loop, visible: showOnCreate })
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
          visible={menu.visible}
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
