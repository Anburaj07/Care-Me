import { Avatar, Box,Icon, Button, Container,useRadioGroup, Flex, HStack, Heading, Text } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom";
import {SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "../Reducer/ConsultationReducer";
import { initialState } from "../Reducer/ConsultationReducer";
import { FaEnvelope, FaPhone, FaVideo } from 'react-icons/fa';
import RadioCard from "../components/RadioCard";
import { useState } from "react"
import AlertComp from "../components/AlertComp";


const DoctorProfile=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const {id}=useParams();
    const navigate=useNavigate()

    const options = ['10:30 AM', '03:00 PM', '08:00 PM'];
    const [val, setVal] = useState('10:30 AM');
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: '10:30 AM',
      onChange: setVal,
    })
    console.log(val,'val')
    const group = getRootProps()

    const [showAlert, setShowAlert] = useState(false);
    const handleAppoinment=()=>{
        // alert(`Appoinment Booked At ${val}`)
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          navigate('/')
        }, 3000);     
    }

    useEffect(()=>{
        fetchAndUpdate()
    },[])

    const fetchAndUpdate=()=>{
        dispatch({type:"FETCH_REQUEST"})
        axios({
            url:`https://server-tsms.onrender.com/doctors/${id}`,
            method:'get'
        }).then((res)=>{
            console.log(res?.data)
            dispatch({type:"FETCH_SUCCESS",payload:res?.data})
        }).catch((err)=>{
            dispatch({type:"FETCH_FAILURE"})
          })
    }
    console.log(state.data,'doc data')
    const{Biography,experience,image,location,name,patients,price,specialist}=state?.data
    return(
        <Box p={4}>
             {state.loading && 
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
          </Box>
        }
         {state.loading ===false &&
         <Flex flexWrap="wrap" alignItems="center"  p={4} margin="auto" justify="space-around" boxShadow='outline'>
          <Box>
          <Box>
          <Avatar size='2xl' name={name} src={image} />
          </Box>
          <Box marginBottom="10px">
              <Heading size="xl">Dr.{name}</Heading>
              <Text fontSize='xl'>{specialist}</Text>
          </Box>
          <Flex marginLeft="25px" marginBottom="10px" w="xs" justify="space-around" >
            <Box w={14} bg="gray.100" p={3} borderRadius="md"><Icon as={FaEnvelope} boxSize={6} color="blue" /></Box>
            <Box w={14} bg="gray.100" p={3} borderRadius="md"><Icon as={FaPhone} boxSize={6} color="green" /></Box> 
            <Box w={14} bg="gray.100" p={3} borderRadius="md"><Icon as={FaVideo} boxSize={6} color="red" /></Box> 
          </Flex>
          <Heading size="lg" marginTop="20px">Info</Heading>
          <HStack justify="space-around" marginBottom="30px">
              <Box bg="gray.200" borderRadius="xl" p={1}>
                  <Text>Price</Text>
                  <Heading size="lg">From ${price}</Heading>
              </Box>
              <Box bg="gray.200"  borderRadius="xl" p={2}>
                  <Text>Experience</Text>
                  <Heading size="lg">{experience}</Heading>
              </Box>
              <Box bg="gray.200"  borderRadius="xl" p={2}>
                  <Text>Patients</Text>
                  <Heading size="lg">{patients}</Heading>
              </Box>
          </HStack>
          </Box>
          <Box>
          <Heading size="lg" marginBottom="20px">Biography</Heading>
          <Container marginBottom="30px">
              {Biography}
          </Container>
          <Heading size="lg" marginBottom="10px">Location</Heading>
          <Text>{location}</Text>
          <HStack marginTop="30px" justify="center">
          <HStack {...group}>
                            {options.map((value) => {
                            const radio = getRadioProps({ value })
                            return (
                                <RadioCard key={value} {...radio}>
                                {value}
                                </RadioCard>
                            )
                            })}
                    </HStack>
          </HStack>
          <Button _hover={{ color: "white" }} marginTop="30px" bg="blue.400" size="xl" p={5} color="white" onClick={handleAppoinment}> Make Appoinment</Button>
          </Box>
          </Flex>
          }
          {showAlert && <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} val={val} name={name}/>}
           
        </Box>
    )
}

export default DoctorProfile