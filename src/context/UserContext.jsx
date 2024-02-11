import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "Debraj" });
  const [ready, setReady] = useState(true);

  // useEffect(() => {
  //   if (!user) {
  //     axios.get("/profile").then(({ data }) => {
  //       setUser(USER);
  //       setReady(true);
  //     });
  //   }
  // }, []);
  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
