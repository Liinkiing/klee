import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button } from '../button'
import { Heading, Text } from '../typography'
import Popover from './Popover'
import { PopoverProps } from './Popover'

const meta: Meta = {
  title: 'Library/Popover',
  component: Popover,
  argTypes: {
    disclosure: { table: { disable: true }, control: { disable: true } },
    buttonText: { table: { disable: true }, control: { disable: true } },
  },
  args: {
    placement: 'right-end',
    showOnCreate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PopoverProps & { buttonText: string }> = ({ buttonText, ...args }) => (
  <Popover {...args} disclosure={<Button>{buttonText}</Button>}>
    {({ hide }) => (
      <>
        <Popover.Header>
          <Heading>Hello Klee</Heading>
        </Popover.Header>
        <Popover.Body>
          <Text>How are you doing?</Text>
        </Popover.Body>
        <Popover.Footer>
          <Button onClick={hide} variant="semi-transparent">
            Close
          </Button>
        </Popover.Footer>
      </>
    )}
  </Popover>
)

export const Default = Template.bind({})

Default.args = {
  buttonText: 'Click me',
  hideCloseButton: true,
  ariaLabel: 'Popover example',
}

export const WithCustomization = Template.bind({})

WithCustomization.args = {
  buttonText: 'Click me',
  hideCloseButton: true,
  ariaLabel: 'Popover example',
  bg: 'cyan.600',
  color: 'white',
  minWidth: 400,
}

export const OnHover = Template.bind({})

OnHover.args = {
  ...WithCustomization.args,
  buttonText: 'Hover me',
  showOnCreate: false,
  trigger: 'hover',
}
