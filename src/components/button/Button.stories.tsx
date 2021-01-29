import React from 'react'
import { Meta, Story } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button'

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Hello world',
}
