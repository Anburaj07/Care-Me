import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Heading} from '@chakra-ui/react'

const AlertComp=({showAlert,setShowAlert,val,name})=>{
    return(
        <Modal isOpen={showAlert} onClose={() => setShowAlert(false)} isCentered size="md" colorScheme="teal" >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="xl" fontWeight="bold" color="white" bg="teal.500">
            Appointment Created!
            </ModalHeader>
            <ModalCloseButton color="white"/>
            <ModalBody fontSize="lg">              
              Your appointment has been scheduled with {name} at {val}  successfully.
            </ModalBody>
          </ModalContent>
        </Modal>
    )
}

export default AlertComp