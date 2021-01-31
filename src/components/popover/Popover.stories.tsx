import React from 'react'
import { Meta, Story } from '@storybook/react'
import Popover from './Popover'
import { PopoverProps } from './Popover'
import { Button } from '../button'
import { Heading, Text } from '../typography'

const meta: Meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {
    disclosure: { table: { disable: true }, control: { disable: true } },
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

const Template: Story<PopoverProps> = args => (
  <Popover {...args} disclosure={<Button>Trigger</Button>}>
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
  hideCloseButton: true,
  ariaLabel: 'Popover example',
}

export const WithCustomization = Template.bind({})

WithCustomization.args = {
  hideCloseButton: true,
  ariaLabel: 'Popover example',
  bg: 'cyan.600',
  color: 'white',
  minWidth: 400,
}
