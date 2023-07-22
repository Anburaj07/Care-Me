import { Avatar, Box, Button, Card, CardBody, Divider, Heading,Text, useToast } from "@chakra-ui/react";
import{ useContext,} from "react";
import { AuthContext } from "../context/AuthContext";
import male from "../images/male.png"
import female from "../images/female.png"
import { useNavigate } from "react-router-dom";

const UserProfile=()=>{
    const {authState,logoutUser} = useContext(AuthContext);
    console.log(authState?.userDetails,'userDetails');
    const navigate=useNavigate();
    const toast = useToast();
    let user=authState?.userDetails;

    const handleLogout=()=>{
        logoutUser()
        toast({
            title: `You are Logged out!.`,
            status: "success",
            isClosable: true,
          });
          navigate('/')
    }
    return (
        <Box>
            <Box bg="url('https://img.freepik.com/free-photo/technology-abstract-background-with-particle-lines_53876-104054.jpg?size=626&ext=jpg&ga=GA1.1.107694881.1686996804&semt=ais') center center / cover no-repeat"
        w="100%"
        p={10}
        >
            <Heading color="whitesmoke">Hey {user.name} !</Heading>
            <Text color="whitesmoke" marginTop="10px">This is your profile page. You can see the preferences you've made  </Text>

             <Box maxW="md" mx="auto" mt={8} p={7}>
      <Card boxShadow="md" borderRadius="md" paddingBottom={7}>
        {user.gender==="male" ? <Avatar size="xl" name={user.name} src={male} mx="auto" mt={-12} /> :
        
        <Avatar size="xl" name={user.name} src={female} mx="auto" mt={-12} />
        }

        <CardBody textAlign="center">
          <Heading as="h1" size="lg" mb={2}>
            {user.name}
          </Heading>

          <Text fontSize="md" mb={4}>
            {user.accountType} | {user.age} years old | {user.gender}
          </Text>

          <Divider mb={4} />

          <Text fontWeight="bold" mb={2}>
            About Me
          </Text>
          <Text>Email: {user.email}</Text>
          <Text>Phone: {user.phoneNo}</Text>

          <Divider my={4} />

          <Text fontWeight="bold" mb={2}>
            Physical Details
          </Text>
          <Text>Weight: {user.weight} kg</Text>
          <Text>Height: {user.height} cm</Text>
        </CardBody>
      </Card>      
    </Box>
    <Button size="lg" bg="teal.100" onClick={handleLogout}>Logout</Button>
        </Box>
        </Box>
    )
}

export default UserProfile