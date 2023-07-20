import { Avatar, Box, Button, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react"

const ConsultationCard=({image,name,price,location,specialist,experience})=>{
    return(
        <Box>
            <Flex flexWrap="wrap" alignItems="center" justify="space-around" 
            margin="auto" marginTop="20px" boxShadow="2xl" p={3}>
                <VStack>
                <Avatar size='2xl' name={name} src={image} />
                <Link>View Profile</Link>
                </VStack>
                <VStack  p={4}>
                    <Heading as='h4' fontSize='20px' color="#14bef0" >Doctor name: {name}</Heading>
                    <Text>Specilist in : {specialist}</Text>
                    <Text>Experience : {experience}</Text>     
                    <Heading  as='h4' fontSize='16px' >Location : {location}</Heading>         
                    <Text >{`$${price} Consultation fee`}</Text>      
                </VStack>
                <Box >
                    <Button bg="#14bef0" p={8} >
                        <VStack >
                        <Heading _hover={{ color: "red.500" }} as='h4' size='md' color="whiteAlpha.900">Book Appoinment</Heading>
                        <Text>No Booking Fee</Text>
                        </VStack>
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default ConsultationCard