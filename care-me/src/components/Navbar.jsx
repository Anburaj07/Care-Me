import { Flex, Heading, Link,useDisclosure,IconButton } from '@chakra-ui/react';
// import { AuthContext } from '../context/AuthContext';
// import { useContext } from 'react';
import { Image } from '@chakra-ui/react'
import logo1 from "../images/logo1.png"
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import {  Drawer,  DrawerBody, DrawerHeader,  DrawerOverlay,  DrawerContent,  DrawerCloseButton,  Button} from '@chakra-ui/react'
const Navbar=()=>{
    // const{authState,logoutUser}=useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate=useNavigate();
    const handleLogin=()=>{
        onClose()
        navigate('/login')
    }
    const handleHome=()=>{
        onClose()
        navigate('/')
    }
    const handleUserProfile=()=>{
        onClose()
        navigate('/userProfile')
    }
    return(
        <Flex justify="space-between" bg='#B2F5EA' color='#285E61' px={4} alignItems="center">
            <Link href='/'>
                <Image   boxSize='100px' src={logo1}  alt='error'/>
            </Link>          
            <Heading>Welcome To CareMe!</Heading>
            <IconButton   aria-label="Open Drawer" icon={<HamburgerIcon boxSize="50px"/>}onClick={onOpen}/>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Our Features</DrawerHeader>
                     <DrawerBody>
                        <Flex flexDirection="column" justifyContent="space-between" height="300px">
                        <Button onClick={handleHome}>Home</Button>  
                        <Button onClick={handleLogin}>Login/Register</Button>
                        <Button onClick={handleUserProfile}>User Profile</Button>                      
                        <Button >About Us</Button>
                        </Flex>          
                    </DrawerBody>
                </DrawerContent>
             </Drawer>      
        </Flex>
    )
}

export default Navbar