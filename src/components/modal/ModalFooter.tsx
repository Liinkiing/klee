import React, { FC } from 'react'

import { Flex } from '../layout'
import { FlexProps } from '../layout/Flex'

export interface ModalFooterProps extends FlexProps {}

const ModalFooter: FC<ModalFooterProps> = ({ children, ...rest }) => {
  return (
    <Flex as="footer" p={4} pt={0} align="center" justify="flex-end" spacing={4} {...rest}>
      {children}
    </Flex>
  )
}

ModalFooter.displayName = 'Modal.Footer'

export default ModalFooter
