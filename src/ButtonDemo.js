import { Box, Button, HStack, Text } from "@chakra-ui/react";

export const ButtonDemo = () => {
  return (
    <HStack spacing="30px">
      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="6xl" color="white">
          챠크라 UI
        </Text>
        <Button colorScheme="blue">버튼</Button>
      </Box>

      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="6xl">챠크라 UI</Text>
        <Text fontSize="20px" color="white">
          챠크라 UI
        </Text>
        <Button colorScheme="teal" size="lg">
          버튼
        </Button>
      </Box>

      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="6xl">챠크라 UI</Text>
        <Text fontSize="20px" color="white">
          챠크라 UI
        </Text>
        <Button colorScheme="teal" color="white" variant="outline">
          버튼
        </Button>
      </Box>
    </HStack>
  );
};
