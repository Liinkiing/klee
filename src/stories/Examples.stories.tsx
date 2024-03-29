import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react'
import css from '@styled-system/css'
import React from 'react'

import { Button, Tooltip, Reveal, Avatar, Heading, List } from '../components'
import Flex from '../components/layout/Flex'
import Grid from '../components/layout/Grid'
import Popover from '../components/popover/Popover'
import Box from '../components/primitives/Box'
import Text from '../components/typography/Text'
import { useColorModeValue } from '../hooks'
import { KleeRadius, KleeShadow } from '../styles/theme'

const meta: Meta = {
  title: 'Examples/Layouts',
  parameters: {
    chromatic: { disable: true },
    controls: { disable: true },
  },
}

export default meta

const Illustration = styled(Box)`
  object-fit: contain;
`

const AppContainer = styled(Grid)(
  css({
    '& .navigation': {
      gridRow: [2, 1],
    },
  }),
)

const NavItem = styled(List.Item)(
  css(theme => ({
    '&:hover': { cursor: 'pointer', bg: theme.currentMode === 'light' ? 'cool-gray.200' : 'cool-gray.600' },
    p: [0, 2],
    gap: 2,
    borderRadius: KleeRadius.Lg,
  })),
)

type Character = { name: string; avatarUrl: string; elementUrl: string; description: string }

export const PageLayout: Story<{ characters: Array<Character> }> = ({ characters }) => (
  <AppContainer
    bg={useColorModeValue('cool-gray.100', 'cool-gray.700')}
    overflow="hidden"
    height={['100vh', 'auto']}
    gridTemplateColumns={['1fr', '300px 1fr']}
    gridTemplateRows={['1fr 100px', '100vh']}
  >
    <Flex
      p={6}
      bg={useColorModeValue('cool-gray.100', 'cool-gray.700')}
      spacing={4}
      overflowX={['overlay' as any, 'auto']}
      justify={['center', 'flex-start']}
      direction="column"
      className="navigation"
    >
      <Reveal appear="from-left">
        <Heading display={['none', 'block']} as="h2">
          Characters
        </Heading>
      </Reveal>
      <Reveal as={List} gap={2} direction={['row', 'column']} appear="from-left" staggerChildren={0.15}>
        {characters.map(c => (
          <Tooltip label={c.description} key={c.name}>
            <NavItem key={c.name}>
              <Avatar bg="cool-gray.500" src={c.avatarUrl} name={c.name} size="xs" />
              <Text>{c.name}</Text>
              <Avatar
                display={['none', 'flex']}
                p={1}
                ml="auto"
                squared
                bg="cool-gray.500"
                src={c.elementUrl}
                size="xs"
              />
            </NavItem>
          </Tooltip>
        ))}
      </Reveal>
    </Flex>
    <Flex
      borderTopLeftRadius={[0, KleeRadius.Xxl]}
      borderBottomLeftRadius={[0, KleeRadius.Xxl]}
      boxShadow={['none', KleeShadow.Lg]}
      bg={useColorModeValue('cool-gray.50', 'cool-gray.600')}
      overflowY="auto"
      direction="column"
      p={6}
    >
      <Reveal>
        <Heading as="h1">Genshin Impact</Heading>
        <Illustration
          mt={4}
          as="img"
          src="https://uploadstatic-sea.mihoyo.com/contentweb/20210129/2021012910250180234.jpg"
        />
        <Popover
          vibrancy
          ariaLabel="Informations"
          bg="indigo.600"
          color="white"
          disclosure={<Button mt={4}>Show informations</Button>}
        >
          <Popover.Header>
            <Heading>Informations</Heading>
          </Popover.Header>
          <Popover.Body>
            <Text>Hello from the othder side</Text>
          </Popover.Body>
        </Popover>
        <Flex maxWidth={[null, 700]} direction="column" mt={6} spacing={4}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur illum incidunt iure minus nesciunt
            porro repellat, totam ullam voluptatem. Autem blanditiis dolores eum eveniet fugiat iusto necessitatibus non
            soluta. Cumque.
          </Text>
        </Flex>
      </Reveal>
    </Flex>
  </AppContainer>
)

PageLayout.argTypes = {
  characters: {
    control: { disable: true },
    table: { disable: true },
  },
}

PageLayout.args = {
  characters: [
    {
      name: 'Klee',
      avatarUrl: 'https://rerollcdn.com/GENSHIN/Characters/Klee.png',
      elementUrl: 'https://rerollcdn.com/GENSHIN/Elements/Element_Pyro.png',
      description:
        "An explosives expert and a regular at the Knights of Favonius' confinement room. Also known as Fleeing Sunlight.",
    },
    {
      name: 'Fischl',
      avatarUrl: 'https://rerollcdn.com/GENSHIN/Characters/Fischl.png',
      elementUrl: 'https://rerollcdn.com/GENSHIN/Elements/Element_Electro.png',
      description:
        'A mysterious girl who calls herself "Prinzessia der Verurteilung" and travels with a night raven named Oz.',
    },
    {
      name: 'Benett',
      avatarUrl: 'https://rerollcdn.com/GENSHIN/Characters/Bennett.png',
      elementUrl: 'https://rerollcdn.com/GENSHIN/Elements/Element_Pyro.png',
      description: "A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
    },
    {
      name: 'Qiqi',
      avatarUrl: 'https://rerollcdn.com/GENSHIN/Characters/Qiqi.png',
      elementUrl: 'https://rerollcdn.com/GENSHIN/Elements/Element_Cryo.png',
      description:
        'An apprentice and herb-picker Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.',
    },
  ],
}

PageLayout.parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
}
