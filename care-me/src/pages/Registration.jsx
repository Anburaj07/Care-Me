import { Flex, Heading, Select, Spinner } from "@chakra-ui/react";
import {Box,Stack,Text,useToast,FormLabel, Button, Input, FormControl} from "@chakra-ui/react";
import axios from 'axios';
import{ useState } from "react";
import { useNavigate } from "react-router-dom";

const initState={name:'',accountType:'patient',age:'',email:'',phoneNo:"",gender:"",height:"",weight:""};
const Registration=()=>{    
    const navigate=useNavigate();
    const toast = useToast();
    const [formData, setFormData] = useState(initState);  
    const [loading,setLoading]=useState(false)
    const handleChange = (e) => {
      let { name, value } = e.target;
      let val=(e.target.type);
      if(val==="number"){
        value=Number(value)
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
        data:formData
      })
        .then((res) => {
            setLoading(false)
          console.log(res);          
            toast({
                title: `Registeration Successful!.`,
                status: "success",
                isClosable: true,
              });
              navigate('/login')
          setFormData(initState)
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: `Registeration Failed.`,
            status: "error",
            isClosable: true,
          });
        });
    };

    if(loading){
      return <Flex margin="auto" justify="center" alignItems="center" boxSize="lg" >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Flex>
    }
    
    const handleClick=()=>{
        navigate('/login')
    }

    const {name,age,email,phoneNo,gender,height,weight} = formData;
    const stackStyles = {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      };
    return(
        <Box marginBottom="50px" >
            <Heading color="teal.500">Register here </Heading>
            <br />
            <Stack borderRadius='2xl' width="xl" margin="auto" padding="30px" direction="column" style={stackStyles}>
            <form onSubmit={handleSubmit} >  
                    <FormControl isRequired>
                         <FormLabel>Name</FormLabel>
                         <Input type="text" name="name" border="1px solid black" value={name} onChange={handleChange} placeholder="Enter your name" />
                    </FormControl>
                    <br />    
                    <FormControl>
                        <FormLabel>Age</FormLabel>
                        <Input type="number" name="age" border="1px solid black" value={age} onChange={handleChange} placeholder="Enter your age" />
                    </FormControl>   
                    <br />     
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input type="email" name="email" border="1px solid black" value={email} onChange={handleChange} placeholder="Enter your e-mail" />
                    </FormControl>    
                    <br />   
                    <FormControl>
                        <FormLabel >Phone Number</FormLabel>
                        <Input type="number" name="phoneNo" border="1px solid black" value={phoneNo} onChange={handleChange} placeholder="Enter your Mobile Number" />
                    </FormControl>   
                    <br />     
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <Select placeholder='Select your Gender' border="1px solid black" name="gender" value={gender} onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>
                    </FormControl>
                    <br />  
                    <FormControl>
                        <FormLabel>Height</FormLabel>
                        <Input type="number" name="height" border="1px solid black" value={height} onChange={handleChange} placeholder="Enter your height (cm)" />
                    </FormControl>   
                    <br />    
                    <FormControl>
                        <FormLabel>Weight</FormLabel>
                        <Input type="number" name="weight" border="1px solid black" value={weight} onChange={handleChange} placeholder="Enter your weight (kg)" />
                    </FormControl>   
                    <br />   
                    <Button colorScheme="blue" mr={3} type="submit">Submit </Button>
                    <Text >Already have an account? <Button bg="none" marginTop="-5px" marginLeft="4px" color="red.400" onClick={handleClick}>Login</Button></Text>
                </form>
            </Stack>                   
        </Box>        
    )
}

export default Registration