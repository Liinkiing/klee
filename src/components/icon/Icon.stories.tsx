import { Meta, Story } from '@storybook/react'
import React from 'react'
import type { IconType } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import * as VscIcons from 'react-icons/vsc'

import { KleeRadius, KleeShadow } from '../../styles/theme'
import { KleeFontSize, KleeFontWeight } from '../../styles/theme/typography'
import Flex from '../layout/Flex'
import Grid from '../layout/Grid'
import Box from '../primitives/Box'
import Heading from '../typography/Heading'
import Text from '../typography/Text'
import Icon, { IconProps } from './Icon'

const meta: Meta = {
  title: 'Library/Icon',
  component: Icon,
  args: {
    color: 'rgb(0,0,0)',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    title: { table: { disable: true }, control: { disable: true } },
    icons: { table: { disable: true }, control: { disable: true } },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const MAX_ICONS = 100

const Template: Story<IconProps & { title: string; icons: Record<string, IconType> }> = ({ title, icons, ...args }) => (
  <Flex gap={4} direction="column">
    <Heading>
      {title}{' '}
      <Box fontWeight={KleeFontWeight.Normal} fontSize={KleeFontSize.Sm} color="gray.500" as="span">
        (showing first {MAX_ICONS} icons)
      </Box>
    </Heading>
    <Grid autoFit={{ min: '130px', max: '1fr' }} gap={2}>
      {Object.entries(icons)
        .slice(0, MAX_ICONS)
        .map(([moduleName, icon]) => (
          <Flex key={moduleName} borderRadius={KleeRadius.Md} p={4} align="center" direction="column" gap={3}>
            <Flex
              boxShadow={KleeShadow.Md}
              borderRadius={KleeRadius.Md}
              p={3}
              align="center"
              justify="center"
              bg="cool-gray.100"
            >
              <Icon as={icon} {...args} />
            </Flex>
            <Text truncate={16} fontSize={KleeFontSize.Xs}>
              {moduleName}
            </Text>
          </Flex>
        ))}
    </Grid>
  </Flex>
)

export const MaterialDesign = Template.bind({})

MaterialDesign.args = {
  title: 'Library/Material Design',
  icons: MdIcons,
}

export const FontAwesome = Template.bind({})

FontAwesome.args = {
  title: 'Library/Font Awesome',
  icons: FaIcons,
}

export const FeatherIcons = Template.bind({})

FeatherIcons.args = {
  title: 'Library/Feather Icons',
  icons: FiIcons,
}

export const VisualStudioCode = Template.bind({})

VisualStudioCode.args = {
  title: 'Library/Visual Studio Code',
  icons: VscIcons,
}
