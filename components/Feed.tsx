import { Box, Image, VStack, Text } from "@chakra-ui/react";

const Feed = () => {
  return (
    <VStack spacing="10px" padding="20px" bg="black" color="white" flex="1">
      <Box>
        <Text fontSize="lg">danielkbk_y_alinane_ • 9 min</Text>
        <Image src="/path-to-image.jpg" alt="Post" />
      </Box>
    </VStack>
  );
};

export default Feed;
