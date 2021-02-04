import React from 'react'
import { Meta, Story } from '@storybook/react'
import { IconButton, IconButtonProps } from './IconButton'
import { Icon } from '../icon'
import { ICON_CONTROL } from '../../utils/storybook'

const meta: Meta = {
  title: 'Library/IconButton',
  component: IconButton,
  argTypes: {
    icon: ICON_CONTROL,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Omit<IconButtonProps, 'icon'> & { icon: string }> = ({ icon, ...args }) => (
  <IconButton icon={<Icon as={ICON_CONTROL.__ICONS[icon]} />} {...args} />
)

export const Default = Template.bind({})

Default.args = {
  icon: 'FiCheckCircle',
}
