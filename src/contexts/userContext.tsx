// importing libraries:
import { createContext, useState, useEffect } from "react";
import { auth } from "../services/firebaseApi";

// importing types:
import { UserContext } from "../@types/user";
import { Props } from "../@types/react";

// creating context:
const userContext = createContext<UserContext | null>(null);

// main:
export const UserContextProvider = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (auth.currentUser?.email) {
        setIsAuthorized(true);
      }
    }, 1000);
  }, []);

  const value: UserContext = {
    isAuthorized,
    setIsAuthorized,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default userContext;
