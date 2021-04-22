import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../button'
import Text from '../typography/Text'
import type { RevealProps } from './Reveal'
import Reveal from './Reveal'

const meta: Meta = {
  title: 'Library/Reveal',
  component: Reveal,
  parameters: {
    chromatic: { disable: true },
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<RevealProps> = args => (
  <Reveal {...args}>
    <Text>Hello Klee</Text>
  </Reveal>
)

export const WithMultipleChildren: Story<RevealProps> = args => (
  <Reveal {...args} display="flex" flexDirection="column" gridGap={2}>
    <Button>Hello Klee</Button>
    <Button>Hello Klee</Button>
    <Button>Hello Klee</Button>
  </Reveal>
)

WithMultipleChildren.args = {
  appear: 'from-left',
  staggerChildren: 0.1,
}
