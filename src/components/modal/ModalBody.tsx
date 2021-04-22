import React, { FC } from 'react'

import { Flex } from '../layout'
import { FlexProps } from '../layout/Flex'

const ModalBody: FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex as="main" p={4} direction="column" {...rest}>
      {children}
    </Flex>
  )
}

ModalBody.displayName = 'Modal.Body'

export default ModalBody
