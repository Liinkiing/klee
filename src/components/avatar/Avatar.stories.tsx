import { Meta, Story } from '@storybook/react'
import React from 'react'

import Avatar, { AvatarProps } from './Avatar'

const meta: Meta = {
  title: 'Library/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'Omar Jbara',
}

export const WithPicture = Template.bind({})

WithPicture.args = {
  name: 'Mikasa Estucasa',
  src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
}

export const Squared = Template.bind({})

Squared.args = {
  name: 'Mikasa Estucasa',
  src: 'https://risibank.fr/cache/stickers/d1261/126102-full.png',
  squared: true,
}
