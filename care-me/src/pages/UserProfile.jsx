import { Box, Card, CardBody, Flex, Heading, Image,Text } from "@chakra-ui/react";
import{ useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProfile=()=>{
    const {authState} = useContext(AuthContext);
    console.log(authState?.userDetails,'userDetails')
    const{name,accountType,age,email,phoneNo,gender,height,weight}=authState?.userDetails
    return (
        <Box>
            <Box bg="url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg?size=626&ext=jpg&ga=GA1.1.107694881.1686996804&semt=ais') center center / cover no-repeat"
        w="100%"
        p={3}
        >
            <Heading color="whitesmoke">Hey {name} !</Heading>
            <Text color="whitesmoke">This is your profile page. You can see the preferences and progress you've made  </Text>

            <Card margin="auto" marginTop="30px" boxShadow="xl" borderRadius="lg" w="lg" bg="gray.200">
            <Heading as='h2' size='md' bg="white" p={4} borderRadius="lg">My Account</Heading>
           <CardBody  height="200px">
            <Flex justifyContent="flex-start" fontSize="xl">User Information</Flex>
            <Flex  p={2} direction="row">
                <Heading as='h2' size='md'>Username</Heading>
                <br/>
                <Text>{name}</Text>
                {/* <Image height="200px" ></Image> */}
            </Flex>
            <Box >
            <br/>
            <Heading as='h2' size='md'></Heading>
            <br/>
            <Text></Text>
            </Box>
           </CardBody>
        </Card>
        </Box>
        </Box>
    )
}

export default UserProfile