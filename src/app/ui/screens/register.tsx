import { Box, Input, Text, Button, Link } from "@chakra-ui/react";

/* FUNDO: #F4F5F7
TEXTO P: #1E1E2F
TEXTO S: #6B7280
PRIMÁRIA BTNS: #6C63FF
SECUNÁRIA: #A78BFA
CARD/BG: #FFFFFF ou #EDEDF0
SUCESSO:rgb(0, 1, 1)
ERRO: #EF4444
AVISO:FBBF24 */

export default function Register() {
  return (
    <Box
      h="100vh"
      bg="#F4F5F7"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#EDEDF0"
        w="400px"
        h="500px"
        rounded="3xl"
        boxShadow="0px 4px 8px rgba(0,0,0,0.3)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
      >
            <Box
                  rounded="50%"
                  w="100px"
                  height="100px"
                  bg="#6C63FF"
            ></Box>
            <Box>
          <Text color="#1E1E2F" fontSize="xl">
            Nome de usuário
          </Text>
          <Input
            type="text"
            w="300px"
            p="2"
            borderColor="#6C63FF"
            bg="white"
          ></Input>
        </Box>
        
        <Box>
          <Text color="#1E1E2F" fontSize="xl">
            E-mail
          </Text>
          <Input
            type="email"
            w="300px"
            p="2"
            borderColor="#6C63FF"
            bg="white"
          ></Input>
        </Box>

        <Box>
          <Text color="#1E1E2F" fontSize="xl">
            Palavra-passe
          </Text>
          <Input
            type="password"
            w="300px"
            p="2"
            borderColor="#6C63FF"
            bg="white"
          ></Input>
        </Box>
        <Button
          bg="#6C63FF"
          color="white"
          w="85%"
          fontSize="2xl"
          fontWeight="300"
        >
          Cadastrar
        </Button>

        <Text color="#6B7280">
          Já tem conta?
          <Link color="#6C63FF">Entre.</Link>
        </Text>
      </Box>
    </Box>
  );
}
