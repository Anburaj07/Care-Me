import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import ConsultationCard from "../components/ConsultationCard";
import { useEffect, useReducer } from "react";
import axios from "axios";
import Quote from "../images/Quote.png";
import SlidingImages from "../components/SlidingImages";
import { reducer } from "../Reducer/ConsultationReducer";
import { initialState } from "../Reducer/ConsultationReducer";

const Consultation =()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    const{title}=useParams();

    useEffect(()=>{
        fetchAndUpdate()
    },[])

    const fetchAndUpdate=()=>{
        dispatch({type:"FETCH_REQUEST"})
        axios({
            url:`https://server-tsms.onrender.com/doctors?specialist=${title}`,
            method:'get'
        }).then((res)=>{
            console.log(res?.data)
            dispatch({type:"FETCH_SUCCESS",payload:res?.data})
        }).catch((err)=>{
            dispatch({type:"FETCH_FAILURE"})
          })
    }

    console.log(state.data,'specilest data')
    return(
        <Box>
            <SlidingImages image1={Quote} image2={Quote} image3={Quote}/>
            {state.loading && 
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='10' />
          </Box>
        }
        {state.loading ===false && 
            <Box>
                {state?.data.map((item)=>(<ConsultationCard key={item?.id} {...item} />))}
            </Box>   
             
          }

        </Box>
    )
}

export default Consultation