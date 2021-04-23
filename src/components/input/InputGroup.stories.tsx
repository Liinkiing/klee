import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Input } from './Input'
import { InputGroup, InputGroupProps } from './InputGroup'

const meta: Meta = {
  title: 'Library/Forms/InputGroup',
  component: InputGroup,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const WithAddons: Story<InputGroupProps> = args => (
  <InputGroup {...args}>
    <InputGroup.LeftAdon>https://</InputGroup.LeftAdon>
    <Input name="website" placeholder="Enter your domain" />
    <InputGroup.RightAddon>.com</InputGroup.RightAddon>
  </InputGroup>
)

WithAddons.args = {}
