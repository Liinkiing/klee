import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FiLock, FiUser } from 'react-icons/fi'

import { Button } from '../button'
import { FormControl } from '../form'
import { Icon } from '../icon'
import { Input, InputGroup } from '../input'
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

const Template: Story<DrawerProps> = args => {
  return (
    <Drawer {...args}>
      {({ hide }) => (
        <>
          <Drawer.Header>Header</Drawer.Header>
          <Drawer.Body gap={4}>
            <FormControl id="username">
              <FormControl.Label>Username</FormControl.Label>
              <InputGroup>
                <InputGroup.LeftElement>
                  <Icon as={FiUser} />
                </InputGroup.LeftElement>
                <Input placeholder="Enter your username" />
              </InputGroup>
              <FormControl.HelperText>Your username will be public</FormControl.HelperText>
            </FormControl>
            <FormControl id="password">
              <FormControl.Label>Password</FormControl.Label>
              <InputGroup>
                <InputGroup.LeftElement>
                  <Icon as={FiLock} />
                </InputGroup.LeftElement>
                <Input placeholder="Enter your password" type="password" />
              </InputGroup>
            </FormControl>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={hide} variant="transparent">
              Cancel
            </Button>
            <Button>Submit</Button>
          </Drawer.Footer>
        </>
      )}
    </Drawer>
  )
}

export const Default = Template.bind({})

Default.args = {
  ariaLabel: 'Example',
  disclosure: <Button>Open drawer</Button>,
}

export const WithCustomization = Template.bind({})

WithCustomization.argTypes = {
  overlay: { table: { disable: false }, control: { disable: false } },
}

WithCustomization.args = {
  ariaLabel: 'Example',
  minWidth: ['80%', '400px'],
  overlay: {
    sx: {
      backdropFilter: 'blur(3px)',
    },
  },
  bgGradient: 'linear(to bottom, cool-gray.50, cool-gray.100)',
  disclosure: <Button>Open drawer</Button>,
}
