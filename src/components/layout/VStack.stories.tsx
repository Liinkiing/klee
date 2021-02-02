import React from 'react'
import { Meta, Story } from '@storybook/react'
import VStack, { VStackProps } from './VStack'
import { Text } from '../typography'

const meta: Meta = {
  title: 'Library/Layout/VStack',
  component: VStack,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<VStackProps> = () => (
  <VStack spacing={4} p={4} bg="cool-gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <VStack spacing={4} p={4} bg="cool-gray.200" align="center">
      <Text>
        I am <code>{'<VStack/>'}</code>
      </Text>
      <Text>
        (basically, a <code>{'<Flex/>'}</code> which render by default in <em>column</em>)
      </Text>
    </VStack>
  </VStack>
)
