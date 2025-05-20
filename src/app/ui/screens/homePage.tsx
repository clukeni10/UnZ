import { Box, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box 
      display="grid"
      gridTemplateColumns="250px 1fr"

    >
      <Box bg="#EDEDF0"  h="100vh">
        <Box
            display="flex"
            gap="4"
            justifyContent="space-evenly"
            mt="2"
            borderBottom="1px solid black"
        >
          <Box
            bg="white"
            border="1px solid"
            borderColor="#6C63FF"
            w="50px"
            h="50px"
          ></Box>
          <Text color="#6C63FF" fontSize="3xl" fontWeight="bold">
            UnZ
          </Text>
        </Box>
      </Box>

      <Box >
            <Text>a</Text>
      </Box>
    </Box>
  );
}
