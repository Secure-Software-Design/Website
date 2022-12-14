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

const baseUrl = "http://127.0.0.1:8000/api/student/";

export default function SignUp() {
  const [RegisterData, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const toSignIn = async () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setRegisterData({
      ...RegisterData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    const RegisterForm = new FormData();
    console.log(
      RegisterData.username,
      RegisterData.password,
      RegisterData.email
    );
    RegisterForm.append("email", RegisterData.email);
    RegisterForm.append("username", RegisterData.username);
    RegisterForm.append("password", RegisterData.password);

    try {
      axios.post(baseUrl, RegisterForm).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
      setRegisterData({ status: false });
    }
    navigate("/home");
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
              colSpan={1}
              h={[400, 500, 600, 800]}
              bg="green.900"
              borderLeftRadius="30"
              p={10}
            >
              <Center h={[400, 500, 600, 800]}>
                <VStack spacing="40px">
                  <Box>
                    <Text
                      color="white"
                      fontWeight={"bold"}
                      textAlign="center"
                      fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                    >
                      Welcome
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      textAlign="center"
                      color="white"
                      fontWeight={"bold"}
                      fontSize={{ base: "15px", md: "20px", lg: "26px" }}
                    >
                      To keep connect with us, please login.
                    </Text>
                  </Box>
                  <Button
                    onClick={toSignIn}
                    bg="green.700"
                    color="#fff"
                    width="100%"
                    fontSize={{ base: "15px", md: "15px", lg: "20px" }}
                    height={55}
                    _hover={{ bg: "green.500" }}
                    border="1px"
                  >
                    Sign In
                  </Button>
                </VStack>
              </Center>
            </GridItem>
            <GridItem
              h={[400, 500, 600, 800]}
              colStart={2}
              colEnd={6}
              borderRightRadius="30"
              bg="white"
            >
              <Center h={[400, 500, 600, 800]}>
                <VStack spacing="20px">
                  <Center h={[50, 100, 200]}>
                    <Text
                      fontSize={{ base: "24px", md: "40px", lg: "56px" }}
                      textAlign="center"
                    >
                      Create Account
                    </Text>
                  </Center>
                  <Input
                    w={[100, 200, 300, 400]}
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                    value={RegisterData.username}
                    bg="#F2F2F2"
                  />
                  <Input
                    w={[100, 200, 300, 400]}
                    placeholder="Email..."
                    name="email"
                    onChange={handleChange}
                    value={RegisterData.email}
                    bg="#F2F2F2"
                  />
                  <Input
                    w={[100, 200, 300, 400]}
                    type="password"
                    placeholder="Password..."
                    name="password"
                    onChange={handleChange}
                    value={RegisterData.password}
                    bg="#F2F2F2"
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
                    >
                      Log In
                    </Button>
                  </Box>

                  <Center h={[25]}></Center>
                </VStack>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Center>
  );
}
