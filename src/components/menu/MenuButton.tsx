import * as React from 'react'
import { Menu as HeadlessMenu } from '@headlessui/react'
import { PolymorphicComponent } from '../primitives/Box'
import { CommonProps } from './common'

export const MENU_BUTTON_TYPE: 'MenuButton' = 'MenuButton'

const MenuButton = React.forwardRef<HTMLButtonElement, any>(({ ...props }, ref) => {
  return <HeadlessMenu.Button ref={ref} {...props} />
})

;(MenuButton as any).name = MENU_BUTTON_TYPE
MenuButton.displayName = 'Menu.Button'

export default MenuButton as PolymorphicComponent<CommonProps>
