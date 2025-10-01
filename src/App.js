import Todo from "./components/todo/Todo"
import Timer from "./components/timer/Timer"
import { ChakraProvider, Container, Heading, Divider, Box } from "@chakra-ui/react";
import "./api/todo";

const App = () => {
  return (
    <>
      <Container maxW="container.md" p={4}>
        <ChakraProvider>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={6}>
            <Heading as="h2" size="lg" mb={4} color="teal.500">
              TODOリスト
            </Heading>
            <Todo />
          </Box>
          
          <Divider my={6} /> 

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={4} color="teal.500">
              Timer
            </Heading>
            <Timer />
          </Box>
        </ChakraProvider>
      </Container>
    </>
  );
};

export default App;








