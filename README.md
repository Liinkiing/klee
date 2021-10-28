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
$ yarn add @liinkiing/klee @emotion/react@^11 @emotion/styled@^11 framer-motion@^5 react-icons@^4 @styled-system/css@^5 react-hook-form@^7 @hookform/resolvers@^2 zod@^3

# using npm
$ npm i @liinkiing/klee @emotion/react@^11 @emotion/styled@^11 framer-motion@^5 react-icons@^4 @styled-system/css@^5 react-hook-form@^7 @hookform/resolvers@^2 zod@^3
```

## Usage

The package uses **styled-system** underneath, so all the UI component extends the base `Box` component and so you can use all of the styled system props and responsive styles!

You can see all the theme values (typography, colors, spacing etc) in the [theme file](src/styles/theme/index.ts). The color palette used is from **Tailwind 2.0**, which is a great color palette!

```tsx
import { extendTheme, klee, KleeProvider, Flex, Button, Text, Icon, Box } from '@liinkiing/klee'
import { FiAirplay } from 'react-icons/fi'
const appTheme = extendTheme({ colors: { brand: { 100: '#6e9c49', 200: '#567a3a' } } })
const App = () => {
  return (
    <KleeProvider theme={appTheme}>
      <Flex spacing={4} direction={['column', 'row']} bg="amber.300">
        <Button>Hello world</Button>
        <Button variant="danger">Hello world</Button>
        <Icon as={FiAirplay} />
        <Box color="cyan.500" p={4}>
          <Text _hover={{ bg: 'amber.500', cursor: 'pointer' }}>Ehe te nandayo</Text>
        </Box>
        {/* You can also use the klee factory, it accept all the Box props  */}
        <klee.main p={4} bg="brand.100" transform scale={1.1}>
          <klee.div>
            <Text>Hello</Text>
          </klee.div>
          <klee.svg mt={4} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
            <g fill="#61DAFB">
              <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
              <circle cx="420.9" cy="296.5" r="45.7" />
              <path d="M520.5 78.1z" />
            </g>
          </klee.svg>
        </klee.main>
      </Flex>
    </KleeProvider>
  )
}
```

You also get for free a **great DX** thanks to TypeScript and the typings work
that has been made in this repository. All the related color props, border radiuses, z indices
etc... have full support for autocomplete and suggest by default the ones available on the theme.
You can also use the exported enums if you prefer (`KleeRadius | KleeFontFamily | KleeZIndex` etc...)

<p align="center">

<img width="500" src="https://github.com/Liinkiing/klee/raw/master/.github/screens/autocomplete.jpg?raw=true">

</p>

## Dark mode

Klee has a support for dark mode. Currently, it is a bit limited, as it does not support
fancy saves user preferences in local storage / cookies nor @media (prefers-color-scheme dark), but
has some great way to customize some internal elements, see more informations here: https://github.com/Liinkiing/klee/pull/22
