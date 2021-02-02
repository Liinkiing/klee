import React from 'react'
import { Meta, Story } from '@storybook/react'
import Flex, { FlexProps } from './Flex'
import { Text } from '../typography'

const meta: Meta = {
  title: 'Library/Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<FlexProps> = () => (
  <Flex spacing={4} p={4} bg="cool-gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <Flex spacing={4} p={4} bg="cool-gray.200" direction="column">
      <Text>I am Klee</Text>
      <Text>I am Fischl</Text>
    </Flex>
  </Flex>
)
