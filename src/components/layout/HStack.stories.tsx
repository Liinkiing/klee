import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Text } from '../typography'
import HStack, { HStackProps } from './HStack'

const meta: Meta = {
  title: 'Library/Layout/HStack',
  component: HStack,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
    story: { expanded: true },
  },
}

export default meta

export const Default: Story<HStackProps> = () => (
  <HStack color="black" spacing={4} p={4} bg="cool-gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <HStack spacing={4} p={4} bg="cool-gray.200" align="center">
      <Text>
        I am <code>{'<HStack/>'}</code>
      </Text>
      <Text>
        (basically, a <code>{'<Flex/>'}</code> which render by default in <em>row</em>)
      </Text>
    </HStack>
  </HStack>
)
