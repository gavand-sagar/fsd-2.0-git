import React from "react";
import UserInformation from "../../shared/components/UserInformation";
import useLogout from "../../shared/hooks/useLogout";

export default function Dashboard() {

  const logout = useLogout();
  
  return (
    <div><UserInformation></UserInformation>  Dashboard</div>
  )
}
