import { Box, VStack, Text, Link } from "@chakra-ui/react";

const Suggestions = () => {
  return (
    <Box padding="20px" bg="black" color="white" width="240px">
      <Text fontSize="xl" marginBottom="10px">Sugerencias para ti</Text>
      <VStack spacing="10px">
        <Link>anatierritatattoo</Link>
        <Link>pablosv94</Link>
        <Link>eloy_pd</Link>
        <Link>franrmroman</Link>
        <Link>pintxolaribar2018</Link>
      </VStack>
    </Box>
  );
};

export default Suggestions;
