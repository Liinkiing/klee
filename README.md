# Klee UI™

<p align="center">
    <img width="256" src="https://i.ibb.co/d0fq7c1/klee.png"/>
</p>

A libray UI made as an excuse to test the workflow of building a packaged UI kit with **styled-system**, **emotion**, **framer-motion**
and **TypeScript**. Also made to try out Storybook v6 with **Chromatic**. Not made to be as huge (and great) as Chakra-UI (which is a great
inspiration), but may be used to do some livestream... And to put **KLEE** EVERYWHERE

## Install

**WARNING** Early early version available, not made to be usable for now (and will maybe never be), but yeah

```bash
# using yarn
$ yarn add @liinkiing/klee

# using npm
$ npm i @liinkiing/klee
```

## Usage

```tsx
import { KleeProvider, Flex, Button, Icon } from '@liinkiing/klee'
import { FiAirplay } from 'react-icons/fi'

const App = () => {
  return (
    <KleeProvider>
      <Flex spacing={4}>
        <Button>Hello world</Button>
        <Button variant="danger">Hello world</Button>
        <Icon as={FiAirplay} />
      </Flex>
    </KleeProvider>
  )
}
```
