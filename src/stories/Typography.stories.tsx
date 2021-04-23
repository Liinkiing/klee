import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Heading, HStack, Text, VStack } from '../components'
import { FONT_SIZES, KleeFontSize, KleeFontWeight } from '../styles/theme/typography'

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    controls: { disable: true },
  },
}

export default meta

const SIZES = Object.entries(FONT_SIZES).map(([size, value]) => ({ size, value }))
const WEIGHTS = Object.entries({
  light: KleeFontWeight.Light,
  normal: KleeFontWeight.Normal,
  'semi bold': KleeFontWeight.Semibold,
  bold: KleeFontWeight.Bold,
  'extra bold': KleeFontWeight.Extrabold,
}).map(([weight, value]) => ({ weight, value }))

export const Default: Story = () => {
  return (
    <VStack spacing={4}>
      <Heading as="h1">Nunito</Heading>
      <VStack spacing={8}>
        {SIZES.map((set, i) => (
          <HStack align="center" spacing={4} key={`.0${i}`}>
            <Text minWidth={12} color="cool-gray.400">
              {set.size}
            </Text>
            <Text fontSize={set.value}>The quick brown fox jumps over the lazy dog 123456789.</Text>
          </HStack>
        ))}
      </VStack>
      <Heading as="h2">Weights</Heading>
      {WEIGHTS.map((set, i) => (
        <HStack align="center" spacing={4} key={`.0${i}`}>
          <Text minWidth={16} color="cool-gray.400">
            {set.weight}
          </Text>
          <Text fontSize={KleeFontSize.Xl4} fontWeight={set.value}>
            The quick brown fox jumps over the lazy dog 123456789.
          </Text>
        </HStack>
      ))}
    </VStack>
  )
}
