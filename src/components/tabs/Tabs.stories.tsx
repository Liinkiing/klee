import React from 'react'
import { Meta, Story } from '@storybook/react'
import Tabs from './Tabs'
import { TabsProps } from './Tabs'

const meta: Meta = {
  title: 'Library/Tabs',
  component: Tabs,
  argTypes: {
    children: { control: { disable: true }, table: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TabsProps> = args => <Tabs {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <Tabs.List ariaLabel="Tabs example">
        <Tabs.Tab>Tab 1</Tabs.Tab>
        <Tabs.Tab>Tab 2</Tabs.Tab>
        <Tabs.Tab>Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Tab 1</Tabs.Panel>
        <Tabs.Panel>Tab 2</Tabs.Panel>
        <Tabs.Panel>Tab 3</Tabs.Panel>
      </Tabs.Panels>
    </>
  ),
}
