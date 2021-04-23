import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FiGlobe, FiMail, FiUser } from 'react-icons/fi'

import { Avatar } from '../avatar'
import { Icon } from '../icon'
import { HStack, VStack } from '../layout'
import { Input } from './Input'
import { InputGroup, InputGroupProps } from './InputGroup'

const meta: Meta = {
  title: 'Library/Forms/InputGroup',
  component: InputGroup,
  args: {
    focusBorderColor: 'blue.300',
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const WithAddons: Story<InputGroupProps> = args => (
  <VStack spacing={4}>
    <InputGroup {...args}>
      <InputGroup.LeftAdon>
        <Icon as={FiUser} />
      </InputGroup.LeftAdon>
      <Input name="name" placeholder="Your name" />
    </InputGroup>
    <HStack spacing={4} direction={['column', 'row']}>
      <InputGroup {...args}>
        <InputGroup.LeftAdon>
          <Icon as={FiMail} />
        </InputGroup.LeftAdon>
        <Input name="email" placeholder="Your email" />
      </InputGroup>
      <InputGroup {...args}>
        <InputGroup.LeftAdon>
          <Icon as={FiGlobe} />
        </InputGroup.LeftAdon>
        <Input name="website" placeholder="https://website.com" />
      </InputGroup>
    </HStack>
    <InputGroup {...args}>
      <InputGroup.LeftAdon>@</InputGroup.LeftAdon>
      <Input name="username" placeholder="username" />
      <InputGroup.RightAddon>
        <Avatar name="Omar Jbara" size="xs" />
      </InputGroup.RightAddon>
    </InputGroup>
  </VStack>
)

WithAddons.args = {}

export const WithElements: Story<InputGroupProps> = args => (
  <VStack spacing={4}>
    <InputGroup {...args}>
      <InputGroup.LeftElement>
        <Icon as={FiUser} />
      </InputGroup.LeftElement>
      <Input name="name" placeholder="Your name" />
    </InputGroup>
    <HStack spacing={4} direction={['column', 'row']}>
      <InputGroup {...args}>
        <InputGroup.LeftElement>
          <Icon as={FiMail} />
        </InputGroup.LeftElement>
        <Input name="email" placeholder="Your email" />
      </InputGroup>
      <InputGroup {...args}>
        <InputGroup.LeftElement>
          <Icon as={FiGlobe} />
        </InputGroup.LeftElement>
        <Input name="website" placeholder="https://website.com" />
      </InputGroup>
    </HStack>
    <InputGroup {...args}>
      <InputGroup.LeftElement>@</InputGroup.LeftElement>
      <Input name="username" placeholder="username" />
      <InputGroup.RightElement>
        <Avatar name="Omar Jbara" size="xs" />
      </InputGroup.RightElement>
    </InputGroup>
  </VStack>
)

WithElements.args = {}
