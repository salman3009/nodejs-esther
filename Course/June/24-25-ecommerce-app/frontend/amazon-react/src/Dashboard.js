import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const navigate = useNavigate();

    useEffect(()=>{
      if(!sessionStorage.getItem('token')){
        alert("user data is not found");
        navigate('/login');
      }
    },[])

      return (<div>
        Welcome to Dashboard
      </div>)
}
export default Dashboard;