import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function useRouteProtector() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // this code will get executed at every page load
    // this keyword?

    if (localStorage.getItem("isLoggedIn") != "true") {
      navigate("/login");
    }     
    
  }, []);

  useEffect(() => {
    return () => {
        // this is going to be executed while in unmounting
        //
    };
  }, []);
}
