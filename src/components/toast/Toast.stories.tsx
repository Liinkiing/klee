import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../button'
import { Flex } from '../layout'
import { List } from '../list'
import { Reveal } from '../reveal'
import { Text } from '../typography'
import { IToast, Toast } from './Toast'
import { toast } from './index'

const meta: Meta = {
  title: 'Library/Toast',
  component: Toast,
  argTypes: {
    id: { table: { disable: true }, control: { disable: true } },
    onHide: { table: { disable: true }, control: { disable: true } },
    placement: {
      defaultValue: 'bottom',
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
    <Flex direction="column" spacing={2}>
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
