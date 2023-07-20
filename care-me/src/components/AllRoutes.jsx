import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Consultation from "../pages/Consultation";

const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/consultation/:title" element={<Consultation/>}/>
        </Routes>
    )
}

export default AllRoutes