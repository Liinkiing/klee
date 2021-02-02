import React, { FC, forwardRef } from 'react'
import Flex, { FlexProps } from './Flex'
import { PolymorphicComponent } from '../primitives/Box'

export interface VStackProps extends FlexProps {}

export const VStack: FC<VStackProps> = forwardRef<HTMLElement, VStackProps>(({ children, ...props }, ref) => {
  return (
    <Flex direction="column" ref={ref} {...props}>
      {children}
    </Flex>
  )
})

export default VStack as PolymorphicComponent<VStackProps>
