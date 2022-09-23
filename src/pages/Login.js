import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles.css";
import { API_URL } from "../utils/URLhandler";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const navigateTo = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    const userAuth = {
      email: email,
      password: password,
    };

    let setToken = (token) =>
      new Promise((resolve, reject) => {
        localStorage.setItem("token", token);
        // console.log(token);

        resolve();
        reject();
      });

    axios
      .post(`${API_URL}/authenticate`, userAuth)
      .then((res) => {
        setToken(res.data).then(() => {
          navigateTo("/");
        });
        // console.log(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <Container p={10}>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Flex alignItems="flex-end" gap={2}>
          <Text fontSize="2xl" fontWeight="600">
            Sign in to
          </Text>
          <Heading fontSize="4xl" fontWeight="700">
            Moti
          </Heading>
        </Flex>
        {isError && (
          <Flex
            fontSize="sm"
            borderWidth="1px"
            p={2}
            w="325px"
            borderRadius="md"
            borderColor="red.300"
            bg="red.100"
            justifyContent="center"
            color="red.400"
          >
            Incorrect username or password.
          </Flex>
        )}
        <form onSubmit={onSubmit}>
          <Flex
            w="325px"
            p={4}
            borderColor="blackAlpha.200"
            borderRadius="md"
            boxShadow="0 5px 4px rgba(0,0,0,.06), 0 5px 8px rgba(0,0,0,.08)"
            flexDir="column"
            gap={4}
            bg="white"
          >
            <Flex gap={3} flexDir="column">
              <Flex flexDir="column" gap={1}>
                <Text color="blackAlpha.900">Email address</Text>
                <Input
                  h="35px"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Flex>
              <Flex flexDir="column" gap={1}>
                <Text color="blackAlpha.900">Password</Text>
                <Input
                  type="password"
                  h="35px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Flex>
            </Flex>
            <Button
              bg="#35c789"
              color="white"
              _hover={{
                bg: "#31b67e",
                boxShadow:
                  "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              }}
              boxShadow="0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
              type="submit"
            >
              Sign in
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
}

export default Login;
