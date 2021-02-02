import React, { FC, forwardRef } from 'react'
import Flex, { FlexProps } from './Flex'
import { PolymorphicComponent } from '../primitives/Box'

export interface HStackProps extends FlexProps {}

export const HStack: FC<HStackProps> = forwardRef<HTMLElement, HStackProps>(({ children, ...props }, ref) => {
  return (
    <Flex direction="row" ref={ref} {...props}>
      {children}
    </Flex>
  )
})

export default HStack as PolymorphicComponent<HStackProps>
