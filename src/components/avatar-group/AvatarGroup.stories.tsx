import React from 'react'
import { Meta, Story } from '@storybook/react'
import AvatarGroup, { AvatarGroupProps } from './AvatarGroup'
import { Avatar } from '../avatar'

const meta: Meta = {
  title: 'AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    max: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AvatarGroupProps> = args => (
  <AvatarGroup {...args}>
    <Avatar name="Mikasa Estucasa" src="https://risibank.fr/cache/stickers/d1261/126102-full.png" />
    <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Avatar name="John Mark" />
    <Avatar name="Dan Abramov" src="https://bit.ly/dan-abramov" />
    <Avatar name="John Cena" />
    <Avatar name="Dan Abramov" bg="yellow.700" />
    <Avatar name="Omar Jbara" />
    <Avatar name="John Doe" />
  </AvatarGroup>
)

export const Default = Template.bind({})

Default.args = {
  max: 5,
}
