import React from 'react'
import { Meta, Story } from '@storybook/react'
import type { ListProps } from './List'
import List from './List'
import Text from '../typography/Text'
import { Avatar } from '../avatar'

const meta: Meta = {
  title: 'List',
  component: List,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ListProps> = args => (
  <List {...args} gap={2}>
    <List.Item gap={2}>
      <Avatar
        name="Klee"
        src="https://jeu-bayrou.com/wp-content/uploads/2020/10/Meilleur-Klee-Build-a-Genshin-Impact.jpg"
        size="xs"
      />
      <Text>Hello Klee</Text>
    </List.Item>
    <List.Item gap={2}>
      <Avatar
        name="Klee"
        src="https://jeu-bayrou.com/wp-content/uploads/2020/10/Meilleur-Klee-Build-a-Genshin-Impact.jpg"
        size="xs"
      />
      <Text>Hello Klee</Text>
    </List.Item>
  </List>
)

export const Default = Template.bind({})
