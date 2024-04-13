import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={userInfo.setUserInfo}>
    </UserContext.Provider>
  );
}






