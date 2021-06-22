import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Spinner, SpinnerProps } from './Spinner'

const meta: Meta<SpinnerProps> = {
  title: 'Library/Spinner',
  component: Spinner,
  args: {
    size: 'lg',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<SpinnerProps> = args => <Spinner {...args} />

export const Default = Template.bind({})

Default.args = {}
