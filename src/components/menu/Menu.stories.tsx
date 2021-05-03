import { Meta, Story } from '@storybook/react'
import React, { ReactNode, useState } from 'react'
import { FiChevronDown, FiChevronUp, FiEdit, FiLogOut, FiPrinter, FiSettings, FiUser } from 'react-icons/fi'

import { Button } from '../button'
import { Icon } from '../icon'
import { Modal } from '../modal'
import Text from '../typography/Text'
import Menu, { MenuProps } from './Menu'

const meta: Meta<MenuProps> = {
  title: 'Library/Menu',
  component: Menu,
  argTypes: {
    menuList: { table: { disable: true }, control: { disable: true } },
  },
  args: {
    showOnCreate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<MenuProps & { menuList: ReactNode }> = ({ menuList, ...args }) => (
  <Menu {...args}>
    <Menu.Button as={Button} variant="primary">
      Menu
    </Menu.Button>
    {menuList}
  </Menu>
)

export const Default = Template.bind({})

Default.args = {
  menuList: (
    <Menu.List ariaLabel="menu">
      <Menu.ListItem>
        <Icon as={FiSettings} />
        <Text>Preferences</Text>
      </Menu.ListItem>
      <Menu.ListItem disabled>
        <Icon as={FiEdit} />
        <Text>Edit (not available yet)</Text>
      </Menu.ListItem>
      <Menu.ListItem>
        <Icon as={FiLogOut} />
        <Text>Logout</Text>
      </Menu.ListItem>
    </Menu.List>
  ),
}

export const WithDivider = Template.bind({})

WithDivider.args = {
  menuList: (
    <Menu.List ariaLabel="menu">
      <Menu.ListItem>
        <Icon as={FiUser} />
        <Text>My profile</Text>
      </Menu.ListItem>
      <Menu.ListItem disabled>
        <Icon as={FiEdit} />
        <Text>Edit (not available yet)</Text>
      </Menu.ListItem>
      <Menu.ListItem>
        <Icon as={FiPrinter} />
        <Text>Print</Text>
      </Menu.ListItem>
      <Menu.Divider />
      <Menu.ListItem>
        <Icon as={FiLogOut} />
        <Text>Logout</Text>
      </Menu.ListItem>
    </Menu.List>
  ),
}

export const WithModalOptions = Template.bind({})

WithModalOptions.args = {
  menuList: (
    <Menu.List ariaLabel="menu">
      <Modal
        color="white"
        bg="cyan.500"
        disclosure={
          <Menu.ListItem closeOnSelect={false}>
            <Icon as={FiUser} />
            <Text>Open profile</Text>
          </Menu.ListItem>
        }
        ariaLabel="profile-modal"
      >
        <Modal.Header>User profile</Modal.Header>
        <Modal.Body>
          <Text>Hello from your profile</Text>
        </Modal.Body>
      </Modal>
      <Menu.ListItem disabled>
        <Icon as={FiEdit} />
        <Text>Edit (not available yet)</Text>
      </Menu.ListItem>
      <Menu.ListItem>
        <Icon as={FiPrinter} />
        <Text>Print</Text>
      </Menu.ListItem>
      <Menu.Divider />
      <Menu.ListItem>
        <Icon as={FiLogOut} />
        <Text>Logout</Text>
      </Menu.ListItem>
    </Menu.List>
  ),
}

export const WithOptionGroups: Story<MenuProps> = args => {
  const [sorting, setSorting] = useState('asc')
  const [filters, setFilters] = useState(['blue'])
  return (
    <Menu {...args}>
      <Menu.Button as={Button} variant="primary">
        Menu
      </Menu.Button>
      <Menu.List ariaLabel="menu">
        <Menu.OptionGroup value={sorting} onChange={setSorting} type="radio" title="Sorting">
          <Menu.OptionItem value="asc">
            <Text>Ascending</Text>
            <Icon ml="auto" as={FiChevronUp} />
          </Menu.OptionItem>
          <Menu.OptionItem value="desc">
            <Text>Descending</Text>
            <Icon ml="auto" as={FiChevronDown} />
          </Menu.OptionItem>
        </Menu.OptionGroup>
        <Menu.OptionGroup value={filters} onChange={setFilters} type="checkbox" title="Filter">
          <Menu.OptionItem value="red">Red</Menu.OptionItem>
          <Menu.OptionItem value="blue">Blue</Menu.OptionItem>
          <Menu.OptionItem value="green">Green</Menu.OptionItem>
        </Menu.OptionGroup>
      </Menu.List>
    </Menu>
  )
}

WithOptionGroups.args = {
  closeOnSelect: false,
}
