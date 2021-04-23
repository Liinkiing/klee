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
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const WithAddons: Story<InputGroupProps> = () => (
  <VStack gap={4}>
    <InputGroup>
      <InputGroup.LeftAdon>
        <Icon as={FiUser} />
      </InputGroup.LeftAdon>
      <Input name="name" placeholder="Your name" />
    </InputGroup>
    <HStack gap={4} direction={['column', 'row']}>
      <InputGroup>
        <InputGroup.LeftAdon>
          <Icon as={FiMail} />
        </InputGroup.LeftAdon>
        <Input name="email" placeholder="Your email" />
      </InputGroup>
      <InputGroup>
        <InputGroup.LeftAdon>
          <Icon as={FiGlobe} />
        </InputGroup.LeftAdon>
        <Input name="website" placeholder="https://website.com" />
      </InputGroup>
    </HStack>
    <InputGroup>
      <InputGroup.LeftAdon>@</InputGroup.LeftAdon>
      <Input name="username" placeholder="username" />
      <InputGroup.RightAddon>
        <Avatar name="Omar Jbara" size="xs" />
      </InputGroup.RightAddon>
    </InputGroup>
  </VStack>
)

WithAddons.args = {}
