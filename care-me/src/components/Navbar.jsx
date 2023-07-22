// import { Flex, Heading, Link,useDisclosure,IconButton } from '@chakra-ui/react';
// import { Image } from '@chakra-ui/react'
// import logo1 from "../images/logo1.png"
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { useNavigate } from 'react-router-dom';
// import {  Drawer,  DrawerBody, DrawerHeader,  DrawerOverlay,  DrawerContent,  DrawerCloseButton,  Button} from '@chakra-ui/react'
// const Navbar=()=>{
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const navigate=useNavigate();
//     const handleLogin=()=>{
//         onClose()
//         navigate('/login')
//     }
//     const handleHome=()=>{
//         onClose()
//         navigate('/')
//     }
//     const handleUserProfile=()=>{
//         onClose()
//         navigate('/userProfile')
//     }
//     return(
//         <Flex justify="space-between" bg='#B2F5EA' color='#285E61' px={4} alignItems="center">
//             <Link href='/'>
//                 <Image   boxSize='100px' src={logo1}  alt='error'/>
//             </Link>          
//             <Heading>Welcome To CareMe!</Heading>
//             <IconButton   aria-label="Open Drawer" icon={<HamburgerIcon boxSize="50px"/>}onClick={onOpen}/>
//             <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
//                 <DrawerOverlay />
//                 <DrawerContent>
//                 <DrawerCloseButton />
//                 <DrawerHeader>Our Features</DrawerHeader>
//                      <DrawerBody>
//                         <Flex flexDirection="column" justifyContent="space-between" height="300px">
//                         <Button onClick={handleHome}>Home</Button>  
//                         <Button onClick={handleLogin}>Login/Register</Button>
//                         <Button onClick={handleUserProfile}>User Profile</Button>                      
//                         <Button >About Us</Button>
//                         </Flex>          
//                     </DrawerBody>
//                 </DrawerContent>
//              </Drawer>      
//         </Flex>
//     )
// }

// export default Navbar


import React from "react";
import {
  Flex,
  Heading,
  Link,
  Image,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import logo1 from "../images/logo1.png"
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isLargerThan768] = useMediaQuery("(min-width: 800px)");

  const handleLogin = () => {
    onClose();
    navigate("/login");
  };
  const handleHome = () => {
    onClose();
    navigate("/");
  };
  const handleUserProfile = () => {
    onClose();
    navigate("/userProfile");
  };

  return (
    <Flex
      justify="space-between"
      bg="#B2F5EA"
      color="#285E61"
      px={4}
      alignItems="center"
    >
      <Link href="/">
        <Flex alignItems="center">
        <Image boxSize="100px" src={logo1} alt="error" />
        <Heading>Care Me</Heading>
        </Flex>
      </Link>      
      {isLargerThan768 ? (
        // Normal Navbar for larger screens
        <Flex  >
          <Button fontSize="xl" bg="none" _hover={{ bg: "teal.300" }} onClick={handleHome} mr={2}>
            Home
          </Button>
          <Button fontSize="xl" bg="none" _hover={{ bg: "teal.300" }} onClick={handleLogin} mr={2}>
            Login/Register
          </Button>
          <Button fontSize="xl" bg="none" _hover={{ bg: "teal.300" }} onClick={handleUserProfile} mr={2}>
            User Profile
          </Button>
          <Button fontSize="xl" bg="none" _hover={{ bg: "teal.300" }}>About Us</Button>
        </Flex>
      ) : (
        // HamburgerIcon for mobile screens
        <IconButton
          aria-label="Open Drawer"
          icon={<HamburgerIcon boxSize="30px" />}
          onClick={onOpen}
        />
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Our Features</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" justifyContent="space-between" height="300px">
              <Button onClick={handleHome} mb={2}>
                Home
              </Button>
              <Button onClick={handleLogin} mb={2}>
                Login/Register
              </Button>
              <Button onClick={handleUserProfile} mb={2}>
                User Profile
              </Button>
              <Button>About Us</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;

