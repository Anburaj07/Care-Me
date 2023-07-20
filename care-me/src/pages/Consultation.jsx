import { Box, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import ConsultationCard from "../components/ConsultationCard";
import { useEffect } from "react";
import axios from "axios";

const Consultation =()=>{
    useEffect(()=>{
        // fetchAndUpdate()
    },[])

    const fetchAndUpdate=()=>{
        axios({
            url:``
        })
    }
    const {title}=useParams();
    return(
        <Box>
            <Heading>Consultation Page</Heading>
            <ConsultationCard/>
            <ConsultationCard/>
        </Box>
    )
}

export default Consultation