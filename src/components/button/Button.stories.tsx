import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ICON_CONTROL } from '../../utils/storybook'
import { Icon } from '../icon'
import { HStack } from '../layout'
import Button, { ButtonProps } from './Button'

const meta: Meta = {
  title: 'Library/Button',
  component: Button,
  argTypes: {
    startIcon: { table: { disable: true }, control: { disable: true } },
    endIcon: { table: { disable: true }, control: { disable: true } },
  },
  args: {
    children: 'Join a course',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})

export const WithIcon: Story<Omit<ButtonProps, 'startIcon' | 'endIcon'> & { startIcon: string; endIcon: string }> = ({
  startIcon,
  endIcon,
  ...args
}) => (
  <HStack spacing={4}>
    <Button startIcon={<Icon as={ICON_CONTROL.__ICONS[startIcon]} />} {...args} />
    <Button endIcon={<Icon as={ICON_CONTROL.__ICONS[endIcon]} />} {...args} />
    <Button
      startIcon={<Icon as={ICON_CONTROL.__ICONS[startIcon]} />}
      endIcon={<Icon as={ICON_CONTROL.__ICONS[endIcon]} />}
      {...args}
    />
  </HStack>
)

WithIcon.argTypes = {
  startIcon: { control: { disable: false, ...ICON_CONTROL.control }, table: { disable: false } },
  endIcon: { control: { disable: false, ...ICON_CONTROL.control }, table: { disable: false } },
}

WithIcon.args = {
  startIcon: 'FiCheckCircle',
  endIcon: 'FiCheckCircle',
}
