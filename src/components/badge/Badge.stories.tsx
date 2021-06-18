import { Meta, Story } from '@storybook/react'
import React from 'react'

import { useTheme } from '../../hooks/useTheme'
import { KleeTheme } from '../../styles/theme'
import { HStack } from '../layout'
import { Badge, BadgeProps } from './Badge'

const meta: Meta<BadgeProps> = {
  title: 'Library/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<BadgeProps> = args => <Badge {...args} />

Default.args = {
  children: 'Hello Klee',
}

const EXCLUDED_COLORS = ['current', 'dark', 'black', 'white', 'background', 'text', 'menu']

export const AllColorScheme: Story<BadgeProps> = args => {
  const theme = useTheme()
  const colors = Object.keys(theme.colors).filter(color => !EXCLUDED_COLORS.includes(color)) as Array<
    keyof KleeTheme['colors']
  >
  return (
    <HStack wrap="wrap" gap={4}>
      {colors.map(color => (
        <Badge key={color} {...args} colorScheme={color}>
          {color}
        </Badge>
      ))}
    </HStack>
  )
}

AllColorScheme.argTypes = {
  colorScheme: { table: { disable: true }, control: { disable: true } },
}
