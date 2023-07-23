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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormLabel, Button, Input, FormControl, Select } from "@chakra-ui/react";

const initState = {
  name: "",
  accountType: "patient",
  age: "",
  email: "",
  phoneNo: "",
  gender: "",
  height: "",
  weight: "",
};
const Registration = () => {
  const navigate = useNavigate();
    // Check if screen size is smaller than 768px
    const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");
  const toast = useToast();
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    let val = e.target.type;
    if (val === "number") {
      value = Number(value);
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setLoading(true);
    axios({
      url: `https://server-tsms.onrender.com/users`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        toast({
          title: `Registration Successful!.`,
          status: "success",
          isClosable: true,
        });
        navigate("/login");
        setFormData(initState);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `Registration Failed.`,
          status: "error",
          isClosable: true,
        });
      });
  };

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

  const handleClick = () => {
    navigate("/login");
  };

  const { name, age, email, phoneNo, gender, height, weight } = formData;



  return (
    <Box marginBottom="50px">
      <Heading color="teal.500">Register here </Heading>
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
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              name="age"
              border="1px solid black"
              value={age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              name="email"
              border="1px solid black"
              value={email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              name="phoneNo"
              border="1px solid black"
              value={phoneNo}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select your Gender"
              border="1px solid black"
              name="gender"
              value={gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Height</FormLabel>
            <Input
              type="number"
              name="height"
              border="1px solid black"
              value={height}
              onChange={handleChange}
              placeholder="Enter your height (cm)"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Weight</FormLabel>
            <Input
              type="number"
              name="weight"
              border="1px solid black"
              value={weight}
              onChange={handleChange}
              placeholder="Enter your weight (kg)"
            />
          </FormControl>
          <br />
          <Button colorScheme="blue" mr={3} type="submit">
            Submit
          </Button>
          {/* Hide text on smaller screens */}
          {!isSmallerThan768 && (
            <Text>
              Already have an account?{" "}
              <Button
                bg="none"
                marginTop="-5px"
                marginLeft="4px"
                color="red.400"
                onClick={handleClick}
              >
                Login
              </Button>
            </Text>
          )}
        </form>
      </Flex>
      {/* Show text below the form on smaller screens */}
      {isSmallerThan768 && (
        <Text mt="2">
          Already have an account?{" "}
          <Button
            bg="none"
            color="red.400"
            onClick={handleClick}
            display="block"
            mx="auto"
          >
            Login
          </Button>
        </Text>
      )}
    </Box>
  );
};

export default Registration;
