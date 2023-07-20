import { Avatar, Box, Button, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react"

const ConsultationCard=({})=>{
    return(
        <Box>
            <Flex width="90%" alignItems="center" justify="space-around" 
            margin="auto" marginTop="20px" boxShadow="xl">
                <VStack>
                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Link>View Profile</Link>
                </VStack>
                <Box>
                    <Heading as='h4' fontSize='20px' color="#14bef0" >Doctor name</Heading>
                    <Text>Specilist</Text>
                    <Text>Experience</Text>     
                    <Heading color="#14bef0" as='h4' size='md'>Location</Heading>         
                    <Text color="#14bef0">{`₹${34}Consultation fee`}</Text>      
                </Box>
                <Box marginLeft="40px">
                    <Button bg="#14bef0" p={8}>
                        <VStack>
                        <Heading as='h4' size='md' color="whiteAlpha.900">Book Appoinment</Heading>
                        <Text>No Booking Fee</Text>
                        </VStack>
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default ConsultationCard