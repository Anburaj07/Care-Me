import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const DoctorsCard = ({ title, description,image}) => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate(`/consultation/${title}`)
    }
    return (
        <Box
        p={3}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        color="black"
        onClick={handleClick}
      >
        <Box >
            <Image height="200px" margin="auto" src={image}></Image>
        </Box>
        <Heading as='h2' size='sm' color="teal.600">{title}</Heading>
        <Text >{description}</Text>
      </Box>
    );
  };

  export default DoctorsCard