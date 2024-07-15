import { Box, VStack, Text, Link } from "@chakra-ui/react";

const Suggestions = () => {
  return (
    <Box padding="20px" bg="black" color="white" width="240px">
      <Text fontSize="xl" marginBottom="10px">Sugerencias para ti</Text>
      <VStack spacing="10px">
        <Link>analaperro</Link>
        <Link>pablodk45</Link>
        <Link>eloquepasa</Link>
        <Link>franmanolo</Link>
        <Link>pintxo2341</Link>
      </VStack>
    </Box>
  );
};

export default Suggestions;
