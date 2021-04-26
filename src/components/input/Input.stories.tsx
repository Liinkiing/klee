import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Input, InputProps } from './Input'

const meta: Meta = {
  title: 'Library/Forms/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<InputProps & { isValid: boolean }> = ({ isValid, ...args }) => {
  return <Input aria-invalid={isValid ? 'false' : 'true'} {...args} />
}

export const Default = Template.bind({})

Default.args = {
  isValid: true,
  placeholder: 'Klee',
}
