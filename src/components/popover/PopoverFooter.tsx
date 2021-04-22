import React, { FC } from 'react'

import { Flex } from '../layout'
import { BoxProps } from '../primitives/Box'

const PopoverFooter: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Flex as="footer" p={4} pt={0} align="center" justify="flex-end" {...rest}>
      {children}
    </Flex>
  )
}

PopoverFooter.displayName = 'Popover.Footer'

export default PopoverFooter
