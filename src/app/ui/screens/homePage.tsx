import { Grid, Box, Text } from "@chakra-ui/react";
import { FiHome, FiSearch, FiBookOpen, FiHeart, FiMusic } from "react-icons/fi";

export default function HomePage() {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="250px 1fr"
      gridTemplateRows="80px 1fr"
      h="100vh"
      gridTemplateAreas={`"sidebar header" "sidebar main"`}
    >
      <Box bg="#ffffff" h="100vh" gridArea="sidebar">
        <Box display="flex" gap="4" justifyContent="space-evenly" mt="2">
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

        <Box mt="10">
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="20px"
            p="7"
            color="#6C63FF"
            gap="10px"
            _hover={{ bg: "#EDEDF0" }}
            cursor="pointer"
          >
            <Box>
              <FiHome size={25} />
            </Box>
            <Text fontSize="2xl">Início</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="20px"
            p="7"
            color="#6C63FF"
            gap="10px"
            _hover={{ bg: "#EDEDF0" }}
            cursor="pointer"
          >
            <Box>
              <FiSearch size={25} />
            </Box>
            <Text fontSize="2xl">Explorar</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="20px"
            p="7"
            color="#6C63FF"
            gap="10px"
            _hover={{ bg: "#EDEDF0" }}
            cursor="pointer"
          >
            <Box>
              <FiBookOpen size={25} />
            </Box>
            <Text fontSize="2xl">Biblioteca</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="20px"
            p="7"
            color="#6C63FF"
            gap="10px"
            _hover={{ bg: "#EDEDF0" }}
            cursor="pointer"
          >
            <Box>
              <FiMusic size={25} />
            </Box>
            <Text fontSize="2xl">Playlists</Text>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            w="100%"
            h="20px"
            p="7"
            color="#6C63FF"
            gap="10px"
            _hover={{ bg: "#EDEDF0" }}
            cursor="pointer"
          >
            <Box>
              <FiHeart size={25} />
            </Box>
            <Text fontSize="2xl">Favoritos</Text>
          </Box>
        </Box>
      </Box>

      <Box
        bg="black"
        color="#6C63FF"
        height="60px"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Box
          bg="white"
          rounded="3xl"
          w="100px"
          h="30px"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          gridArea="header"
        >
          <Box bg="black" h="20px" w="20px" rounded="full"></Box>
          <Text>Username</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        flexDirection="row"
        gap="10"
        p="5"
        gridArea="main"
      >
        <Box bg="black" h="200px" w="200px"></Box>
        <Box bg="black" h="200px" w="200px"></Box>
        <Box bg="black" h="200px" w="200px"></Box>
        <Box bg="black" h="200px" w="200px"></Box>
        <Box>
          <Box bg="black" h="200px" w="200px" rounded="full"></Box>
          <Text color="#6C63FF" fontSize="xl">Artista</Text>
        </Box>
        <Box>
          <Box bg="black" h="200px" w="200px" rounded="full"></Box>
          <Text color="#6C63FF" fontSize="xl">Artista</Text>
        </Box>
        <Box>
          <Box bg="black" h="200px" w="200px" rounded="full"></Box>
          <Text color="#6C63FF" fontSize="xl">Artista</Text>
        </Box>
        <Box>
          <Box bg="black" h="200px" w="200px" rounded="full"></Box>
          <Text color="#6C63FF" fontSize="xl">Artista</Text>
        </Box>
      </Box>
    </Grid>
  );
}
