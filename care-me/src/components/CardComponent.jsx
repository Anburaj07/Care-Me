import { Card, Text,CardBody,Heading,Image, Box } from '@chakra-ui/react'

const CardComponent=({image,heading,text})=>{
    // const{image,heading,text}=props;
    // console.log(heading,'heading')
    return(
        <Card boxShadow="xl" borderRadius="lg">
           <CardBody  height="200px">
            <Box bg="#98cbd6"  p={2} borderRadius="lg">
                <Image height="200px" src={image} margin="auto"></Image>
            </Box>
            <Box >
            <br/>
            <Heading as='h2' size='md'>{heading}</Heading>
            <br/>
            <Text>{text}</Text>
            </Box>
           </CardBody>
        </Card>
    )
}

export default CardComponent
