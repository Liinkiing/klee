import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KleeProvider, Button, Flex } from '../.';

const App = () => {
  return (
    <KleeProvider>
      <Flex gridGap={4}>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
      </Flex>
    </KleeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
