import styled from '@emotion/styled'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FiLock, FiUser } from 'react-icons/fi'

import { Button } from '../button'
import { FormControl } from '../form'
import { Icon } from '../icon'
import { Input, InputGroup } from '../input'
import { VStack } from '../layout'
import { List } from '../list'
import { Heading, Text } from '../typography'
import { KleeHeadingSize } from '../typography/Heading'
import { Drawer, DrawerProps } from './Drawer'

const meta: Meta<DrawerProps> = {
  title: 'Library/Drawer',
  component: Drawer,
  argTypes: {
    overlay: { table: { disable: true }, control: { disable: true } },
    disclosure: { table: { disable: true }, control: { disable: true } },
    content: { table: { disable: true }, control: { disable: true } },
  },
  args: {
    showOnCreate: true,
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<DrawerProps> = args => {
  return (
    <Drawer {...args}>
      {({ hide }) => (
        <>
          <Drawer.Header>Header</Drawer.Header>
          <Drawer.Body gap={4} tabIndex={-1}>
            <FormControl id="username">
              <FormControl.Label>Username</FormControl.Label>
              <InputGroup>
                <InputGroup.LeftElement>
                  <Icon as={FiUser} />
                </InputGroup.LeftElement>
                <Input placeholder="Enter your username" />
              </InputGroup>
              <FormControl.HelperText>Your username will be public</FormControl.HelperText>
            </FormControl>
            <FormControl id="password">
              <FormControl.Label>Password</FormControl.Label>
              <InputGroup>
                <InputGroup.LeftElement>
                  <Icon as={FiLock} />
                </InputGroup.LeftElement>
                <Input placeholder="Enter your password" type="password" />
              </InputGroup>
            </FormControl>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={hide} variant="transparent">
              Cancel
            </Button>
            <Button>Submit</Button>
          </Drawer.Footer>
        </>
      )}
    </Drawer>
  )
}

export const Default = Template.bind({})

Default.args = {
  ariaLabel: 'Example',
  disclosure: <Button>Open drawer</Button>,
}

export const WithCustomization = Template.bind({})

WithCustomization.argTypes = {
  overlay: { table: { disable: false }, control: { disable: false } },
}

WithCustomization.args = {
  ariaLabel: 'Example',
  minWidth: ['80%', '400px'],
  overlay: {
    sx: {
      backdropFilter: 'blur(3px)',
    },
  },
  bgGradient: 'linear(to bottom, cool-gray.50, cool-gray.100)',
  disclosure: <Button>Open drawer</Button>,
}

const LongContentHeading = styled(Heading)()

LongContentHeading.defaultProps = {
  size: KleeHeadingSize.Lg,
  width: 'fit-content',
  bgClip: 'text',
  bgGradient: 'linear(to right, fuchsia.400, fuchsia.600)',
}

export const WithLongContent: Story<DrawerProps> = args => {
  return (
    <Drawer {...args}>
      {({ hide }) => (
        <>
          <Drawer.Header>Header</Drawer.Header>
          <Drawer.Body gap={4} tabIndex={-1}>
            <VStack gap={10} textAlign="justify">
              <VStack gap={2}>
                <LongContentHeading>Synopsis</LongContentHeading>
                <Text>
                  <b>Genshin Impact</b> est un jeu vidéo de type <em>action-RPG</em> développé par miHoYo
                </Text>
                <Text>
                  Dans un monde fantastique nommé Teyvat, certains individus choisis par les dieux se sont vu attribuer
                  un <b>Œil Divin</b> — une gemme qui confère à son porteur la capacité de contrôler{' '}
                  <b>un des sept éléments</b>. Le joueur commence son aventure en tant que Voyageur ou Voyageuse dont
                  l'origine est inconnue, à la recherche d'un(e) proche disparu(e). Au cours de l'aventure, le joueur a
                  la possibilité de contrôler plusieurs autres personnages qu'il rencontre lors de son périple, chacun
                  ayant une personnalité unique et des capacités spéciales, alors qu'ils entreprennent des quêtes pour
                  comprendre la vérité sur les dieux primordiaux de ce monde
                </Text>
              </VStack>
              <VStack gap={2}>
                <LongContentHeading>Système de jeu</LongContentHeading>
                <Text>
                  Le jeu propose une carte du monde ouverte avec divers terrains, que le joueur peut explorer en
                  marchant, en escaladant, en nageant et en planant. De nombreux objets et lieux importants sont
                  répartis sur toute la carte. Le joueur peut contrôler jusqu'à quatre de ses personnages à la fois. En
                  accomplissant des quêtes pour faire progresser dans l'histoire, le joueur a la possibilité de
                  déverrouiller <b>jusqu'à 30 personnages jouables</b>. Chaque personnage possède deux compétences de
                  combat uniques : une compétence normale et une compétence spéciale. La compétence normale peut être
                  utilisée à tout moment, mais est sujette à un délai de récupération après utilisation, alors que la
                  compétence spéciale a un coût en énergie, obligeant le joueur à accumuler d'abord suffisamment
                  d'énergie élémentaire. La cuisine est un autre aspect important du système de jeu de Genshin Impact.
                  Le joueur peut collecter des ressources diverses et variées tout au long de son aventure, dont
                  certaines peuvent être utilisées pour préparer des plats. Certains plats permettent de restaurer la
                  santé des personnages ou de les ressusciter, tandis que d'autres augmentent les capacités offensives
                  ou défensives.
                </Text>
              </VStack>
              <VStack gap={2}>
                <LongContentHeading>Système multijoueur</LongContentHeading>
                <Text>
                  Genshin Impact possède aussi un mode multijoueur débloqué à partir du niveau 16 d'aventure,&nbsp;
                  <b>jusqu'à 4 joueurs peuvent rejoindre maximum</b>.
                </Text>
                <List>
                  <List.Item>
                    <Text>
                      <b>- à 2 joueurs</b> : chaque joueur peut jouer avec 2 personnages en même temps.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <b>- à 3 joueurs</b> : chaque joueur peut jouer avec 1 personnage en même temps, sauf l'hôte de la
                      partie qui en joue 2.
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <b>- dès 4 joueurs</b> : chaque joueur ne peut contrôler qu'un seul personnage à la fois.
                    </Text>
                  </List.Item>
                </List>
                <Text>
                  Il est à noter que la présence de joueurs dans le monde du joueur hôte n'oblige pas ce dernier à les
                  inviter dans un Donjon, l'hôte peut partir en solo dans un donjon ou leur proposer de le rejoindre
                  dans le Donjon. Ne pas être dans le donjon avec l'hôte n'expulse pas les joueurs invités du monde de
                  l'hôte.
                </Text>
              </VStack>
            </VStack>
          </Drawer.Body>
          <Drawer.Footer>
            <Button onClick={hide} variant="transparent">
              Cancel
            </Button>
            <Button>Submit</Button>
          </Drawer.Footer>
        </>
      )}
    </Drawer>
  )
}

WithLongContent.args = {
  ariaLabel: 'Example',
  maxWidth: ['100%', '500px'],
  disclosure: <Button>Open drawer</Button>,
}
