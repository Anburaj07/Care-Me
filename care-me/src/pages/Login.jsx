import {Box, Center, Flex, Heading, Spacer,Stack,Text,useToast} from "@chakra-ui/react";
import axios from 'axios';
import{ useContext, useRef, useState } from "react";
import {FormLabel, Button, Input, FormControl} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login=()=>{
    const toast = useToast();
    const {loginUser,authState } = useContext(AuthContext);
    const [formData, setFormData] = useState({ name: "", phoneNo: "" });  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form data submitted:", formData);
  
      axios({
        url: `https://server-tsms.onrender.com/users?phoneNo=${formData.phoneNo}`,
        method: "get",
      })
        .then((res) => {
          console.log(res);          
          if(res.data.length>0){
            const [arr]=res?.data;
            const{name,accountType,age,email,phoneNo,gender,height,weight}=arr;
            loginUser(name,accountType,age,email,phoneNo,gender,height,weight)
            toast({
                title: `Login Successful.`,
                status: "success",
                isClosable: true,
              });
          }else{
            toast({
                title: `Login Failed.`,
                status: "error",
                isClosable: true,
              });
          }
          setFormData({ name: "", phoneNo: "" })
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

    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/registration')
    }
    const stackStyles = {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", // Your desired box shadow style
      };
    const { name, phoneNo } = formData;
    return(
          <Box>
            <Heading>Sign in</Heading>
            <br />
            <Stack direction="column" width="md" margin="auto" padding="30px" style={stackStyles}>                
            <form onSubmit={handleSubmit} >              
                    <FormControl isRequired>
                         <FormLabel >Mobile Number</FormLabel>
                         <Input type="text" name="name" border="1px solid black" value={name} onChange={handleChange} placeholder="Enter your name " />
                    </FormControl>
                    <br />
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input type="number" name="phoneNo" border="1px solid black" value={phoneNo} onChange={handleChange} placeholder="Enter Mobile Number" />
                    </FormControl>
                    <br />                    
                    <Button colorScheme="blue" mr={3} type="submit">Submit </Button>
                    <Text >Don't have an account <Button bg="none" marginTop="-5px" marginLeft="4px" color="red.400" onClick={handleClick}>Sign up!</Button></Text>
                </form>
            </Stack>                   
        </Box>        
    )
}

export default Login