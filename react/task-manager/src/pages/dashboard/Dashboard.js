import React from "react";
import useRouteProtector from "../../shared/hooks/useRouteProtector";

export default function Dashboard() {
  useRouteProtector();
  return (
    <div>Dashboard</div>
  )
}
