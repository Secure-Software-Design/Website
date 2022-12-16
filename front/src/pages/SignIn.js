import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

import {
  Center,
  Button,
  VStack,
  Text,
  Box,
  Grid,
  Input,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/user-login";

export default function SignIn() {
  const [RegisterData, setRegisterData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const toCreate = async () => {
    navigate("/create");
  };

  const submitForm = () => {
    const RegisterForm = new FormData();
    RegisterForm.append("username", RegisterData.username);
    RegisterForm.append("password", RegisterData.password);
    try {
      axios.post(baseUrl, RegisterForm).then((res) => {
        if (res.data.bool === true) {
          localStorage.setItem("studentLoginStatus", true);
          navigate("/home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setRegisterData({
      ...RegisterData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Center width={"100vw"} height={"100vh"}>
      <VStack align="stretch">
        <Box
          w={[400, 500, 600, 700, 800, 900, 1000]}
          h={[400, 500, 600, 800]}
          boxShadow="dark-lg"
          borderRadius="30"
        >
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem
              h={[400, 500, 600, 800]}
              colSpan={3}
              borderLeftRadius="30"
              bg="white"
            >
              <Center h={[400, 500, 600, 800]}>
                <VStack spacing="20px">
                  <Center h={[50, 100, 200]}>
                    <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
                      Sign in to Calcio
                    </Text>
                  </Center>
                  <Input
                    w={[100, 200, 300, 400]}
                    placeholder="Email..."
                    name="username"
                    onChange={handleChange}
                    value={RegisterData.username}
                    bg="#F2F2F2"
                    p={6}
                    mt={10}
                  />
                  <Input
                    w={[100, 200, 300, 400]}
                    type="password"
                    name="password"
                    placeholder="Password..."
                    onChange={handleChange}
                    value={RegisterData.password}
                    bg="#F2F2F2"
                    p={6}
                  />
                  <Box>
                    <Button
                      onClick={submitForm}
                      bg="green.700"
                      color="#fff"
                      width="200px"
                      fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                      height={55}
                      _hover={{ bg: "green.500" }}
                      border="1px"
                      p={6}
                    >
                      Log In
                    </Button>
                  </Box>

                  <Center h={[25]}></Center>
                </VStack>
              </Center>
            </GridItem>
            <GridItem
              colStart={4}
              colEnd={6}
              h={[400, 500, 600, 800]}
              bg="green.900"
              borderRightRadius="30"
              p={10}
            >
              <Center h={[400, 500, 600, 800]}>
                <VStack spacing="40px">
                  <Box>
                    <Text
                      color="white"
                      textAlign="center"
                      fontWeight={"bold"}
                      fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                    >
                      Hello !
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      textAlign="center"
                      color="white"
                      fontWeight={"bold"}
                      fontSize={{ base: "15px", md: "20px", lg: "26px" }}
                    >
                      Enter your personnal informations to start.
                    </Text>
                  </Box>
                  <Button
                    onClick={toCreate}
                    bg="green.700"
                    color="#fff"
                    width="100%"
                    fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                    height={55}
                    _hover={{ bg: "green.500" }}
                    border="1px"
                  >
                    Sign Up
                  </Button>
                </VStack>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Center>
  );
}
