import { Meta } from '@storybook/react'
import React from 'react'
import { FiMail, FiUser } from 'react-icons/fi'
import { object, string } from 'zod'

import { useZodForm } from '../../hooks/useZodForm'
import { Icon } from '../icon'
import { InputGroup } from '../input'
import { VStack } from '../layout'
import { Form } from './Form'
import { FormControl } from './FormControl'
import { FormInput } from './FormInput'

const meta: Meta = {
  title: 'Library/Forms/Form',
  component: Form,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const schema = object({
  username: string(),
  email: string().email('Email is not valid'),
})

export const Default = () => {
  const form = useZodForm({
    schema,
    mode: 'all',
  })
  return (
    <Form
      form={form}
      onSubmit={values => {
        console.log({ values })
      }}
    >
      <VStack spacing={4}>
        <FormControl id="username">
          <FormControl.Label>Username</FormControl.Label>
          <InputGroup>
            <InputGroup.LeftElement>
              <Icon as={FiUser} />
            </InputGroup.LeftElement>
            <FormInput placeholder="Enter your username" {...form.register('username')} />
          </InputGroup>
        </FormControl>
        <FormControl id="email">
          <FormControl.Label>Email</FormControl.Label>
          <InputGroup>
            <InputGroup.LeftElement>
              <Icon as={FiMail} />
            </InputGroup.LeftElement>
            <FormInput placeholder="Enter your email" {...form.register('email')} />
          </InputGroup>
        </FormControl>
      </VStack>
    </Form>
  )
}

Default.args = {}
