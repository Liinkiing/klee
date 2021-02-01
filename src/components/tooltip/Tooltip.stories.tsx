import React from 'react'
import { Meta, Story } from '@storybook/react'
import Tooltip from './Tooltip'
import { TooltipProps } from './Tooltip'
import { Button } from '../button'
import Box from '../primitives/Box'
import Text from '../typography/Text'
import { KleeFontWeight } from '../../styles/theme/typography'
import Flex from '../layout/Flex'
import { Reveal } from '../reveal'
import { List } from '../list'

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    truncate: { table: { disable: true }, control: { disable: true } },
    trigger: {
      control: {
        type: 'check',
        options: ['mouseenter', 'focus', 'click', 'focusin', 'manual'],
      },
    },
  },
  args: {
    showOnCreate: true,
    label: 'Hello Klee',
    trigger: ['mouseenter', 'focus'],
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
)

export const Default = Template.bind({})

export const WithCustomization = Template.bind({})

WithCustomization.args = {
  bg: 'amber.500',
}

export const WithHTMLContent = Template.bind({})

WithHTMLContent.argTypes = {
  label: { table: { disable: true }, control: { disable: true } },
}

WithHTMLContent.args = {
  label: (
    <Flex direction="column">
      <Text>
        Hi I have some{' '}
        <Box as="span" fontWeight={KleeFontWeight.Bold}>
          <span role="img" aria-label="sprinkes">
            ✨
          </span>{' '}
          HTML{' '}
          <span role="img" aria-label="sprinkes">
            ✨
          </span>
        </Box>
      </Text>
      <Flex>
        <Reveal as={List} appear="from-left" flex={1} alignItems="center">
          <List.Item>hello</List.Item>
          <List.Item>hello</List.Item>
          <List.Item>hello</List.Item>
        </Reveal>
        <Reveal as={List} appear="from-right" flex={1} alignItems="center">
          <List.Item>world</List.Item>
          <List.Item>world</List.Item>
          <List.Item>world</List.Item>
        </Reveal>
      </Flex>
    </Flex>
  ),
}
