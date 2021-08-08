import { Meta } from '@storybook/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FiGlobe, FiMail, FiUser } from 'react-icons/fi'
import { z } from 'zod'

import { useZodForm } from '../../hooks'
import { WEBSITE_REGEX } from '../../utils/regex'
import { Icon } from '../icon'
import { Input, InputGroup } from '../input'
import { Flex, VStack } from '../layout'
import { Form } from './Form'
import { FormControl } from './FormControl'
import { SubmitButton } from './SubmitButton'

const meta: Meta = {
  title: 'Library/Forms/Form',
  component: Form,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const schema = z.object({
  username: z.string().min(6),
  email: z.string().email('The email you entered is invalid'),
  website: z.string().regex(WEBSITE_REGEX, 'Please enter a correct url'),
})

export const Default = () => {
  const form = useForm({
    mode: 'all',
  })
  return (
    <Form
      autoComplete="off"
      form={form}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <VStack spacing={4}>
        <FormControl id="username">
          <FormControl.Label>Username</FormControl.Label>
          <InputGroup>
            <InputGroup.LeftElement>
              <Icon as={FiUser} />
            </InputGroup.LeftElement>
            <Input placeholder="Enter your username" {...form.register('username')} />
          </InputGroup>
        </FormControl>
        <Flex direction={['column', 'row']} spacing={4}>
          <FormControl id="email">
            <FormControl.Label>Email</FormControl.Label>
            <InputGroup>
              <InputGroup.LeftElement>
                <Icon as={FiMail} />
              </InputGroup.LeftElement>
              <Input placeholder="Enter your email" {...form.register('email')} />
            </InputGroup>
          </FormControl>
          <FormControl id="website">
            <FormControl.Label>Website</FormControl.Label>
            <InputGroup>
              <InputGroup.LeftElement>
                <Icon as={FiGlobe} />
              </InputGroup.LeftElement>
              <Input placeholder="https://yourwebsite.com" {...form.register('website')} />
            </InputGroup>
          </FormControl>
        </Flex>
        <SubmitButton alignSelf="flex-start">Submit</SubmitButton>
      </VStack>
    </Form>
  )
}

Default.args = {}

export const WithZodValidation = () => {
  const form = useZodForm({
    schema,
    mode: 'all',
  })
  return (
    <Form
      autoComplete="off"
      form={form}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <VStack spacing={4}>
        <FormControl minHeight="102px" id="username">
          <FormControl.Label>Username</FormControl.Label>
          <InputGroup>
            <InputGroup.LeftElement>
              <Icon as={FiUser} />
            </InputGroup.LeftElement>
            <Input placeholder="Enter your username" {...form.register('username')} />
          </InputGroup>
        </FormControl>
        <Flex direction={['column', 'row']} spacing={4}>
          <FormControl minHeight="102px" id="email">
            <FormControl.Label>Email</FormControl.Label>
            <InputGroup>
              <InputGroup.LeftElement>
                <Icon as={FiMail} />
              </InputGroup.LeftElement>
              <Input placeholder="Enter your email" {...form.register('email')} />
            </InputGroup>
          </FormControl>
          <FormControl minHeight="102px" id="website">
            <FormControl.Label>Website</FormControl.Label>
            <InputGroup>
              <InputGroup.LeftElement>
                <Icon as={FiGlobe} />
              </InputGroup.LeftElement>
              <Input placeholder="https://yourwebsite.com" {...form.register('website')} />
            </InputGroup>
          </FormControl>
        </Flex>
        <SubmitButton alignSelf="flex-start">Submit</SubmitButton>
      </VStack>
    </Form>
  )
}

WithZodValidation.args = {}
