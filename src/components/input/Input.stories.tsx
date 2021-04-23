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

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Klee',
  focusBorderColor: 'blue.300',
}
