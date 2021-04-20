import * as React from 'react'
import { MenuButton as ReakitMenuButton } from 'reakit'
import { PolymorphicComponent } from '../primitives/Box'
import { CommonProps } from './common'
import { Button } from '../button'
import { useMenu } from './Menu.context'

const MenuButton = React.forwardRef<HTMLButtonElement, any>(({ ...props }, ref) => {
  const menu = useMenu()
  return <ReakitMenuButton as={Button} ref={ref} {...menu} {...props} />
})

MenuButton.displayName = 'Menu.Button'

export default MenuButton as PolymorphicComponent<CommonProps>
