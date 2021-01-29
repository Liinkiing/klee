import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
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

ReactDOM.render(<App />, document.getElementById('root'))
