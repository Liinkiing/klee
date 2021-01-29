import React from 'react'

import { Meta, Story } from '@storybook/react'
import Icon, { IconProps } from './Icon'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as VscIcons from 'react-icons/vsc'

import Flex from '../layout/Flex'
import Heading from '../typography/Heading'
import Grid from '../layout/Grid'
import Text from '../typography/Text'
import { FontSize } from '../primitives/Box'
import type { IconType } from 'react-icons'

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  args: {
    color: 'rgb(0,0,0)',
  },
  argTypes: {
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

const Template: Story<IconProps & { title: string; icons: Record<string, IconType> }> = ({ title, icons, ...args }) => (
  <Flex spacing={3} direction="column">
    <Heading>{title}</Heading>
    <Grid autoFit={{ min: '130px', max: '1fr' }} gap={2}>
      {Object.entries(icons).map(([moduleName, icon]) => (
        <Flex py={2} align="center" direction="column" spacing={2}>
          <Icon as={icon} {...args} />
          <Text fontSize={FontSize.Xs}>{moduleName}</Text>
        </Flex>
      ))}
    </Grid>
  </Flex>
)

export const MaterialDesign = Template.bind({})

MaterialDesign.args = {
  title: 'Material Design',
  icons: MdIcons,
}

export const FontAwesome = Template.bind({})

FontAwesome.args = {
  title: 'Font Awesome',
  icons: FaIcons,
}

export const FeatherIcons = Template.bind({})

FeatherIcons.args = {
  title: 'Feather Icons',
  icons: FiIcons,
}

export const VisualStudioCode = Template.bind({})

VisualStudioCode.args = {
  title: 'Visual Studio Code',
  icons: VscIcons,
}
