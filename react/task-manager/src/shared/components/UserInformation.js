import React, { useContext } from "react";
import UserDataContext from "../data/UserGlobalData";

export default function UserInformation() {
  const { username,avatarImage } = useContext(UserDataContext);

  return <div>Username :- {username}</div>;
}
