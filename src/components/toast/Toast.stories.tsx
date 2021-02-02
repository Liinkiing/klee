import React from 'react'
import { Meta, Story } from '@storybook/react'
import { IToast, Toast } from './Toast'
import { Button } from '../button'
import { toast } from './index'
import { Flex } from '../layout'
import { Text } from '../typography'
import { Reveal } from '../reveal'
import { List } from '../list'

const meta: Meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    id: { table: { disable: true }, control: { disable: true } },
    onHide: { table: { disable: true }, control: { disable: true } },
    placement: {
      defaultValue: 'top',
    },
    duration: {
      defaultValue: null,
      table: {
        defaultValue: {
          summary: 'A computed value that corresponds to (total characters of the children * 100ms)',
        },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<Omit<IToast, 'id'>> = args => (
  <Button
    onClick={() => {
      toast(args)
    }}
  >
    Toast
  </Button>
)

export const Default = Template.bind({})

Default.args = {
  content: 'Hello I am a toast',
}

export const WithCustomContent = Template.bind({})

WithCustomContent.argTypes = {
  content: { table: { disable: true }, control: { disable: true } },
}

WithCustomContent.args = {
  content: (
    <Flex direction="column" gap={2}>
      <Text>You can also use other components</Text>
      <Reveal as={List} direction="row" gap={1} duration={0.5} staggerChildren={0.1}>
        <List.Item>Like the</List.Item>
        <List.Item>the</List.Item>
        <List.Item>reveal</List.Item>
        <List.Item>component</List.Item>
        <List.Item>
          <span role="img" aria-label="hot face">
            🥵
          </span>
        </List.Item>
      </Reveal>
    </Flex>
  ),
}
