import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../button'
import { Drawer, DrawerProps } from './Drawer'

const meta: Meta = {
  title: 'Library/Drawer',
  component: Drawer,
  argTypes: {
    overlay: { table: { disable: true }, control: { disable: true } },
    disclosure: { table: { disable: true }, control: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<DrawerProps> = args => (
  <Drawer {...args}>
    <Drawer.Header>Header</Drawer.Header>
    <Drawer.Body>Body</Drawer.Body>
    <Drawer.Footer>Footer</Drawer.Footer>
  </Drawer>
)

export const Default = Template.bind({})

Default.args = {
  ariaLabel: 'Example',
  disclosure: <Button>Open drawer</Button>,
}
