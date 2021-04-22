import React, { FC, forwardRef } from 'react'

import { PolymorphicComponent } from '../primitives/Box'
import Flex, { FlexProps } from './Flex'

export interface VStackProps extends FlexProps {}

export const VStack: FC<VStackProps> = forwardRef<HTMLElement, VStackProps>(({ children, ...props }, ref) => {
  return (
    <Flex direction="column" ref={ref} {...props}>
      {children}
    </Flex>
  )
})

export default VStack as PolymorphicComponent<VStackProps>
