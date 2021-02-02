import React, { FC } from 'react'
import Flex, { FlexProps } from './Flex'
import { PolymorphicComponent } from '../primitives/Box'

export interface HStackProps extends FlexProps {}

export const HStack: FC<HStackProps> = ({ children, ...props }) => {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  )
}

export default HStack as PolymorphicComponent<HStackProps>
