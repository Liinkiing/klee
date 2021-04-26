import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FiUser } from 'react-icons/fi'

import { Icon } from '../icon'
import { Input, InputGroup } from '../input'
import { FormControl, FormControlProps } from './FormControl'

const meta: Meta = {
  title: 'Library/Forms/FormControl',
  component: FormControl,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<FormControlProps> = args => (
  <FormControl {...args}>
    <FormControl.Label>Username</FormControl.Label>
    <Input />
    <FormControl.HelperText>The username will be public</FormControl.HelperText>
  </FormControl>
)

Default.args = {
  id: 'username',
}

export const WithInputGroup: Story<FormControlProps> = args => (
  <FormControl {...args}>
    <FormControl.Label>Username</FormControl.Label>
    <InputGroup>
      <InputGroup.LeftElement>
        <Icon as={FiUser} />
      </InputGroup.LeftElement>
      <Input />
    </InputGroup>
    <FormControl.HelperText>The username will be public</FormControl.HelperText>
  </FormControl>
)

WithInputGroup.args = {
  id: 'username',
}
