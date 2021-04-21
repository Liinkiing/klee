import React, { ReactElement } from 'react'
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from 'reakit/Menu'
import { Menu as AppMenu } from './'
import MenuListItem from './MenuListItem'
import { MenuList } from './index'
import { KleeZIndex, Z_INDICES } from '../../styles/theme'
import Tippy from '@tippyjs/react'
import { Icon } from '../icon'
import { FiChevronRight } from 'react-icons/fi'
import { Text } from '../typography'
import { Box } from '../primitives'

const PreferencesMenu = React.forwardRef((props, ref) => {
  const menu = useMenuState()
  return (
    <>
      <MenuButton ref={ref} {...menu} {...props}>
        Preferences
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  )
})

export const SubMenu = React.forwardRef(({ children, title }, ref) => {
  const menu = useMenuState({ unstable_virtual: true })
  const list = React.Children.toArray(children).find((c: any) => c.type === MenuList) as ReactElement

  return (
    <Box position="relative" display="inline-block">
      <Tippy
        zIndex={Z_INDICES[KleeZIndex.Dropdown]}
        placement="auto"
        render={attrs => (list ? React.cloneElement(list, { ...attrs, ...menu }) : null)}
        animation
        visible={menu.visible}
        popperOptions={{
          strategy: 'fixed',
        }}
      >
        <AppMenu.Button as={MenuListItem} {...menu} ref={ref}>
          <Text>{title}</Text>
          <Icon as={FiChevronRight} ml="auto" />
        </AppMenu.Button>
      </Tippy>
    </Box>
  )
  // return (
  //   <AppMenu placement="auto">
  //     <AppMenu.Button as={MenuListItem} ref={ref}>
  //       <Text>{title}</Text>
  //       <Icon as={FiChevronRight} ml="auto" />
  //     </AppMenu.Button>
  //     {children}
  //   </AppMenu>
  // )
})
//
//
// export const SubMenu = React.forwardRef(({ children, content }, ref) => {
//   const list = React.Children.toArray(children).find((c: any) => c.type === MenuList) as ReactElement
//   const menu = useMenuState({ animated: TRANSITION_DURATION * 1000 })
//   const closeOnSelect = false
//   const hideOnClickOutside = false
//   const context = useMemo<Context>(() => ({ reakitMenu: menu, closeOnSelect, hideOnClickOutside }), [
//     menu,
//     closeOnSelect,
//     hideOnClickOutside,
//   ])
//   return (
//     <Tippy
//       zIndex={Z_INDICES[KleeZIndex.Dropdown]}
//       placement="auto"
//       render={attrs =>
//         list ? <MenuContext.Provider value={context}>{React.cloneElement(list, attrs)}</MenuContext.Provider> : null
//       }
//       animation
//       visible={menu.visible}
//       popperOptions={{
//         strategy: 'fixed',
//       }}
//     >
//       <MenuButton as={MenuListItem} ref={ref} {...menu}>
//         {content}
//       </MenuButton>
//     </Tippy>
//   )
// })

export function Example() {
  const menu = useMenuState()
  return (
    <>
      <MenuButton {...menu}>Code</MenuButton>
      <Menu {...menu} aria-label="Code">
        <MenuItem {...menu}>About Visual Studio Code</MenuItem>
        <MenuItem {...menu}>Check for Updates...</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu} as={PreferencesMenu} />
      </Menu>
    </>
  )
}
