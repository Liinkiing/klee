import * as React from 'react'
import { MenuButton as ReakitMenuButton } from 'reakit/Menu'

import { Button } from '../button'
import { PolymorphicComponent } from '../primitives/Box'
import { useMenu } from './Menu.context'
import { CommonProps } from './common'

const MenuButton = React.forwardRef<HTMLButtonElement, any>(({ ...props }, ref) => {
  const { reakitMenu } = useMenu()
  return <ReakitMenuButton as={Button} ref={ref} {...reakitMenu} {...props} />
})

MenuButton.displayName = 'Menu.Button'

export default MenuButton as PolymorphicComponent<CommonProps>
