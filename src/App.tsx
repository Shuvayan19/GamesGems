import { Kbd } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
const App = () => {
  return (
    <>
      Hello world 
      <Button colorScheme=" blue">btn</Button>
      <Button colorScheme='red'>Button</Button>
      <div>
        <Kbd>alt</Kbd> + <Kbd>F4</Kbd>
      </div>
    </>
  );
};

export default App;
