import * as React from 'react'
import 'react-app-polyfill/ie11'
import { createRoot } from 'react-dom/client'

import { Button, Flex, KleeProvider } from '../.'

const App = () => {
  return (
    <KleeProvider>
      <Flex spacing={4}>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
      </Flex>
    </KleeProvider>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(<App />)
