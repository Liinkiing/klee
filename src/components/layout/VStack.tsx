import React, { FC } from 'react'
import Flex, { FlexProps } from './Flex'
import { PolymorphicComponent } from '../primitives/Box'

export interface VStackProps extends FlexProps {}

export const VStack: FC<VStackProps> = ({ children, ...props }) => {
  return (
    <Flex direction="column" {...props}>
      {children}
    </Flex>
  )
}

export default VStack as PolymorphicComponent<VStackProps>
