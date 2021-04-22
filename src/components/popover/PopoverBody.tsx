import React, { FC } from 'react'

import { Flex } from '../layout'
import { BoxProps } from '../primitives/Box'

const PopoverBody: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Flex as="main" p={4} direction="column" {...rest}>
      {children}
    </Flex>
  )
}

PopoverBody.displayName = 'Popover.Body'

export default PopoverBody
