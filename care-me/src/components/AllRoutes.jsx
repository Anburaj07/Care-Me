import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Consultation from "../pages/Consultation";
import PrivateRoute from "./PrivateRoute";
import DoctorProfile from "../pages/DoctorProfile";
import UserProfile from "../pages/UserProfile";


const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/consultation/:title" element={<PrivateRoute>
                <Consultation/>
            </PrivateRoute>}/>
            <Route path="/doctorProfile/:id" element={<DoctorProfile/>}/>
            <Route path="/userProfile" element={<PrivateRoute>
                <UserProfile/>
            </PrivateRoute>}/>
        </Routes>
    )
}

export default AllRoutes