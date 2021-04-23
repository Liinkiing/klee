import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Flex, Grid, Heading, Text, VStack } from '../components'
import colors from '../styles/modules/colors'
import { KleeBorder, KleeShadow } from '../styles/theme'
import { KleeFontWeight } from '../styles/theme/typography'
import { colorContrast } from '../utils/color'

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    controls: { disable: true },
  },
}

export default meta

const PALETTE_COLORS: Array<keyof typeof colors> = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'yellow',
  'teal',
  'blue',
  'light-blue',
  'cyan',
  'emerald',
  'green',
  'lime',
  'amber',
  'orange',
  'red',
  'warm-gray',
  'true-gray',
  'gray',
  'cool-gray',
  'blue-gray',
]

export const Default: Story = () => {
  const palettes = PALETTE_COLORS.map(color => ({
    color,
    palette: Object.entries(colors[color]).map(([shade, hex]) => ({ shade, hex })),
  }))
  return (
    <VStack gap={4}>
      {palettes.map(value => (
        <VStack gap={4} key={value.color}>
          <Heading
            alignSelf="flex-start"
            bgClip="text"
            bgGradient={`linear(to right, ${value.color}.500, ${value.color}.700)`}
          >
            {value.color}
          </Heading>
          <Grid autoFit gap={4}>
            {value.palette.map(p => (
              <Flex
                borderRadius={KleeBorder.Lg}
                color={colorContrast(p.hex)}
                position="relative"
                key={p.shade}
                p={2}
                height={100}
                fontWeight={KleeFontWeight.Semibold}
                sx={{ transition: 'all 0.3s, transform 0.2s' }}
                _hover={{ cursor: 'pointer', boxShadow: KleeShadow.Lg, opacity: 0.8, transform: 'translateY(-5px)' }}
                bg={`${value.color}.${p.shade}`}
              >
                <Text>{p.shade}</Text>
                <Text position="absolute" bottom={2} right={2}>
                  ({p.hex})
                </Text>
              </Flex>
            ))}
          </Grid>
        </VStack>
      ))}
    </VStack>
  )
}
