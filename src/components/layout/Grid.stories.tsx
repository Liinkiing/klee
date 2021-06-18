import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Text } from '../typography'
import Grid from './Grid'

const meta: Meta = {
  title: 'Library/Layout/Grid',
  component: Grid,
  argTypes: {
    templateColumns: {
      control: { disabled: true },
      table: { disable: true },
    },
    rowGap: {
      control: { disabled: true },
      table: { disable: true },
    },
    columnGap: {
      control: { disabled: true },
      table: { disable: true },
    },
    autoFlow: {
      control: { disabled: true },
      table: { disable: true },
    },
    autoRows: {
      control: { disabled: true },
      table: { disable: true },
    },
    autoColumns: {
      control: { disabled: true },
      table: { disable: true },
    },
    templateRows: {
      control: { disabled: true },
      table: { disable: true },
    },
    templateAreas: {
      control: { disabled: true },
      table: { disable: true },
    },
    area: {
      control: { disabled: true },
      table: { disable: true },
    },
    column: {
      control: { disabled: true },
      table: { disable: true },
    },
    row: {
      control: { disabled: true },
      table: { disable: true },
    },
    autoFit: {
      control: { disabled: true },
      table: { disable: true },
    },
    autoFill: {
      control: { disabled: true },
      table: { disable: true },
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'fullscreen',
  },
}

export default meta

export const Default: Story = () => (
  <Grid color="black" bg="cool-gray.100" p={4} templateColumns={['1fr', '1fr 1fr 1fr']}>
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
  </Grid>
)

Default.parameters = {
  controls: { disable: true },
}

export const WithAutoFitFill: Story<{ mode: 'fit' | 'fill' }> = ({ mode = 'fill' }) => (
  <Grid
    color="black"
    bg="cool-gray.100"
    p={4}
    {...(mode === 'fit' ? { autoFit: { min: '200px', max: '1fr' } } : { autoFill: { min: '200px', max: '1fr' } })}
  >
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
    <Text p={4} bg="cool-gray.200">
      Hello
    </Text>
  </Grid>
)

WithAutoFitFill.args = {
  mode: 'fill',
}

WithAutoFitFill.argTypes = {
  mode: {
    control: {
      type: 'select',
      options: ['fit', 'fill'],
      defaultValue: 'fill',
    },
  },
}
