import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [type, setType] = useState("Login");

  const activeProps = {
    variant: "solid",
    color: "white",
    colorScheme: "pink",
    bgGradient: "linear(to-r, #aa44b1, #f5439b)",
  };

  const inactiveProps = {
    variant: "outline",
    borderColor: "gray.300",
    borderWidth: 1.5,
    color: "black",
    colorScheme: "white",
  };

  return (
    <Flex
      h="100%"
      alignItems={"center"}
      bgGradient={"linear(to-r, #aa44b1, #f5439b)"}
    >
      <Container maxW="400" color="white" mt={"auto"} mb={"auto"}>
        <Card boxShadow={"md"} p="4">
          <CardHeader>
            <Heading as="h1" textAlign={"center"}>
              {type} Form
            </Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={"5"}>
              <ButtonGroup isAttached w={"100%"}>
                <Button
                  {...(type === "Login" ? activeProps : inactiveProps)}
                  w="50%"
                  onClick={() => setType("Login")}
                >
                  Login
                </Button>
                <Button
                  {...(type === "Signup" ? activeProps : inactiveProps)}
                  w="50%"
                  onClick={() => setType("Signup")}
                >
                  Signup
                </Button>
              </ButtonGroup>
              <Input
                size="md"
                placeholder="Email Address"
                focusBorderColor="#f5439b"
              />
              <Input
                size="md"
                placeholder="Password"
                focusBorderColor="#f5439b"
              />
              {type === "Signup" && (
                <Input
                  size="md"
                  placeholder="Confirm Password"
                  focusBorderColor="#f5439b"
                />
              )}
              <Flex
                direction={"column"}
                w="100%"
                alignContent={"start"}
                gap={2}
              >
                <Link color={"#f5439b"}>Forgot password?</Link>
                {type === "Login" && (
                  <Checkbox colorScheme="pink"> Keep me signed in </Checkbox>
                )}
              </Flex>
              <Button
                w={"100%"}
                bgGradient={"linear(to-r, #aa44b1, #f5439b)"}
                color={"white"}
                colorScheme="pink"
              >
                {type}
              </Button>
              {type === "Login" && (
                <Text>
                  Not a member? <Link color={"#f5439b"}>Signup now!</Link>
                </Text>
              )}
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </Flex>
  );
}

export default App;
