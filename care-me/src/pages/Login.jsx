import React from "react";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FormLabel, Button, Input, FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const { authState, loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phoneNo: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setLoading(true);
    axios({
      url: `https://server-tsms.onrender.com/users?phoneNo=${formData.phoneNo}`,
      method: "get",
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.length > 0) {
          const [arr] = res?.data;
          const {
            name,
            accountType,
            age,
            email,
            phoneNo,
            gender,
            height,
            weight,
          } = arr;
          authState.isAuth = true;
          loginUser(
            name,
            accountType,
            age,
            email,
            phoneNo,
            gender,
            height,
            weight
          );
          toast({
            title: `Login Successful.`,
            status: "success",
            isClosable: true,
          });
          navigate("/");
        } else {
          toast({
            title: `Login Failed.`,
            status: "error",
            isClosable: true,
          });
        }
        setFormData({ name: "", phoneNo: "" });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `Login Failed.`,
          status: "error",
          isClosable: true,
        });
      });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/registration");
  };
  const { name, phoneNo } = formData;

  // Check if screen size is smaller than 768px
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  if (loading) {
    return (
      <Flex margin="auto" justify="center" alignItems="center" boxSize="lg">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <Box marginBottom="30px">
      <Heading color="teal.500">Sign-in here</Heading>
      <br />
      <Flex
        direction="column"
        width="80%" // Adjust width for larger screens
        maxW="500px" // Add max width to limit width on larger screens
        margin="auto"
        p={5}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        borderRadius="2xl"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              border="1px solid black"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="number"
              name="phoneNo"
              border="1px solid black"
              value={phoneNo}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
            />
          </FormControl>
          <br />
          <Button colorScheme="blue" mr={3} type="submit">
            Submit
          </Button>
          {/* Hide text on smaller screens */}
          {!isSmallerThan768 && (
            <Text>
              Don't have an account{" "}
              <Button
                bg="none"
                marginTop="-5px"
                marginLeft="4px"
                color="red.400"
                onClick={handleClick}
              >
                Sign up!
              </Button>
            </Text>
          )}
        </form>
      </Flex>
      {/* Show text below the form on smaller screens */}
      {isSmallerThan768 && (
        <Text mt="2">
          Don't have an account{" "}
          <Button
            bg="none"
            color="red.400"
            onClick={handleClick}
            display="block"
            mx="auto"
          >
            Sign up!
          </Button>
        </Text>
      )}
    </Box>
  );
};

export default Login;
