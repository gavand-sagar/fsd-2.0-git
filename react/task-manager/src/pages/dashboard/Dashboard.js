import React from "react";
import UserInformation from "../../shared/components/UserInformation";
import useLogout from "../../shared/hooks/useLogout";
import useRouteProtector from "../../shared/hooks/useRouteProtector";

export default function Dashboard() {
  useRouteProtector();

  const logout = useLogout();
  
  return (
    <div><UserInformation></UserInformation>  Dashboard</div>
  )
}
