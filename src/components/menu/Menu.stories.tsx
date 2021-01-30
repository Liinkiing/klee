import React, { ReactNode, useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Menu, { MenuProps } from './Menu'
import { Button } from '../button'
import Text from '../typography/Text'
import { Icon } from '../icon'
import { FiChevronDown, FiChevronUp, FiEdit, FiLogOut, FiPrinter, FiSettings, FiUser } from 'react-icons/fi'

const meta: Meta = {
  title: 'Menu',
  component: Menu,
  argTypes: {
    menuList: { table: { disable: true }, control: { disable: true } },
  },
  parameters: {
    controls: { expanded: false },
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
    <Menu.List>
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
    <Menu.List>
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

export const WithOptionGroups: Story<MenuProps> = args => {
  const [sorting, setSorting] = useState('asc')
  const [filters, setFilters] = useState(['blue'])
  return (
    <Menu {...args}>
      <Menu.Button as={Button} variant="primary">
        Menu
      </Menu.Button>
      <Menu.List>
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
