import React, { FC } from 'react'

import Box, { BoxProps } from '../primitives/Box'

const MenuDivider: FC<BoxProps> = ({ ...props }) => {
  return (
    <Box
      role="separator"
      as="hr"
      border="0"
      borderBottom="sm"
      borderColor="cool-gray.200"
      width="92%"
      mx="auto"
      my={1}
      {...props}
    />
  )
}

MenuDivider.displayName = 'Menu.Divider'

export default MenuDivider
