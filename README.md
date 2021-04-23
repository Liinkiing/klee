# Klee UI™

<p align="center">
    <img width="256" src="https://i.ibb.co/d0fq7c1/klee.png"/>
</p>

A library UI made as an excuse to test the workflow of building a packaged UI kit with **styled-system**, **emotion**, **framer-motion**
and **TypeScript**. Also made to try out Storybook v6 with **Chromatic**. Not made to be as huge (and great) as Chakra-UI (which is a great
inspiration), but may be used to do some livestream... And to put **KLEE** EVERYWHERE

[View the storybook](https://master--601420e5b1a157002157352a.chromatic.com/) - [View the chromatic page](https://www.chromatic.com/library?appId=601420e5b1a157002157352a)

## Install

**WARNING** Early early version available, not made to be usable for now (and will maybe never be), but yeah

```bash
# using yarn
$ yarn add @liinkiing/klee @emotion/react@^11 @emotion/styled@^11 framer-motion@^4 react-icons@^4 @styled-system/css@^5

# using npm
$ npm i @liinkiing/klee @emotion/react@^11 @emotion/styled@^11 framer-motion@^4 react-icons@^4 @styled-system/css@^5
```

## Usage

The package uses **styled-system** underneath, so all the UI component extends the base `Box` component and so you can use all of the styled system props and responsive styles!

You can see all the theme values (typography, colors, spacing etc) in the [theme file](src/styles/theme/index.ts). The color palette used is from **Tailwind 2.0**, which is a great color palette!

```tsx
import { KleeProvider, Flex, Button, Icon, Box } from '@liinkiing/klee'
import { FiAirplay } from 'react-icons/fi'

const App = () => {
  return (
    <KleeProvider>
      <Flex gap={4} direction={['column', 'row']} bg="amber.300">
        <Button>Hello world</Button>
        <Button variant="danger">Hello world</Button>
        <Icon as={FiAirplay} />
        <Box color="cyan.500" p={4}>
          <Text _hover={{ bg: 'amber.500', cursor: 'pointer' }}>Ehe te nandayo</Text>
        </Box>
      </Flex>
    </KleeProvider>
  )
}
```
