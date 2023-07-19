import {Navigate} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const PrivateRoute = (props) => {
    const{authState}=useContext(AuthContext);
    
    if(!authState?.isAuth){
        return <Navigate to={"/login"} />
    }
    
     return props.children
};

export default PrivateRoute;
