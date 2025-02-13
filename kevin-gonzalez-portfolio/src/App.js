import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";

function App() 
{
  return (
    <ChakraProvider>
      <main>
        <Header />
      </main>
    </ChakraProvider>
  );
}

export default App;
