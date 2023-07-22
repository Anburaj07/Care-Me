import { Heading,Text, Box,Grid,GridItem,Image,Link } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import Banner from "../images/Banner.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DoctorsCard from "../components/DoctorsCard";

const cardData = [
    { title: 'Pediatrician', description: 'Child Specialists and Doctors for Infant',image:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg' },
    { title: 'Orthopedist', description: 'For Bone and joints issues spinal injuries and more',image:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg' },
    { title: 'Physiotherapist', description: 'Pulled muscle? Get it treated by a physiotherapist',image:'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg' },
    { title: 'Neurologist', description: 'Specializing in the nervous systems disorders',image:'https://media.istockphoto.com/id/1180488192/photo/males-doctor-examining-brain-mr.jpg?b=1&s=612x612&w=0&k=20&c=rEV_TfLTw1Inwg-CrdcguzpRbBOFxJqlJBaZ_MtvH2c=' },
    { title: 'Dermatologist', description: 'Focusing on skin, hair, and nail disorders',image:'https://media.istockphoto.com/id/1364062170/photo/female-cosmetologist-doctor-analyzing-womans-skin-analysing-with-magnifying-glass.jpg?b=1&s=612x612&w=0&k=20&c=qo5BN1fmBm7BJYKbb_TH00mEbcJyKBgvj6PWtagvT0w=' },
  ];

  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

const Home=()=>{
    return (
             <Box p={8} >
                <Link href="/login"><Image margin="auto" src={Banner} borderRadius='lg'/> </Link>
                <Grid  marginTop="30px"
             templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)'}}
             gap={7}
           >
                <GridItem>
                    <CardComponent heading="Instant Video Consultation " text="Connect within 60 secs" image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" />  
                </GridItem>
                <GridItem>
                    <CardComponent heading="Find Doctors Near You" text="Confirmed appointments" image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" />  
                </GridItem>
                <GridItem>
                    <CardComponent heading="Medicines" text="Essentials at your doorstep at anytime" image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" />  
                </GridItem>
                <GridItem>
                    <CardComponent heading="Lab Tests" text="Sample pickup at your home" image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" />  
                </GridItem>
                <GridItem>
                    <CardComponent heading="Surgeries" text="Safe and trusted surgery centers" image="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" />  
                </GridItem>
                </Grid>

                <Box marginTop="40px">
                    <Heading color="teal.800">Book an appointment for consultation</Heading>
                    <Text color="teal.400">Find experienced doctors across all specialties</Text>
                    <Grid templateColumns="1fr" gap={6} justifyContent="center" p={4}>
                        <Carousel responsive={responsiveConfig}>
                        {cardData.map((card, index) => (
                            <Box key={index}>
                            <DoctorsCard title={card.title} description={card.description} image={card.image} />
                            </Box>
                        ))}
                        </Carousel>
                    </Grid>
                </Box>

             </Box>
    )
}

export default Home