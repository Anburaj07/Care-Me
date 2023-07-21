import { Avatar, Box, Button, Flex, HStack, Heading, Link, Text, VStack, useRadioGroup } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import RadioCard from "./RadioCard"
import { useState } from "react"
import AlertComp from "./AlertComp"


const ConsultationCard=({id,image,name,price,location,specialist,experience})=>{
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(`/doctorProfile/${id}`)
    }
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
        //   navigate('/')
        }, 10000);     
    }

    return(
        <Box>
            <Flex flexWrap="wrap" alignItems="center" justify="space-around" 
            margin="auto" marginTop="20px" boxShadow="2xl" p={3} >
                <VStack>
                <Avatar size='2xl' name={name} src={image} />
                <Link onClick={handleClick}>View Profile</Link>
                </VStack>
                <VStack  p={4}>
                    <Heading as='h4' fontSize='20px' color="#14bef0" >Doctor name: {name}</Heading>
                    <Text>Specilist in : {specialist}</Text>
                    <Text>Experience : {experience}</Text>     
                    <Heading  as='h4' fontSize='16px' >Location : {location}</Heading>         
                    <Text >{`$${price} Consultation fee`}</Text>      
                </VStack>
                <Box >
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
                    <Button marginTop="10px" bg="#14bef0" p={8} onClick={handleAppoinment} >
                        <VStack >                        
                        <Heading _hover={{ color: "red.500" }} as='h4' size='md' color="whiteAlpha.900">Book Appoinment</Heading>
                        <Text>No Booking Fee</Text>
                        </VStack>
                    </Button>
                </Box>
            </Flex>   
            {showAlert && <AlertComp showAlert={showAlert} setShowAlert={setShowAlert} val={val} name={name}/>}         
        </Box>
    )
}

export default ConsultationCard