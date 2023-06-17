// importing libraries:
import { createContext, useState } from "react";

// importing types:
import { UserContext } from "../@types/user";
import { Props } from "../@types/react";

// creating context:
const userContext = createContext<UserContext | null>(null);

// main:
export const UserContextProvider = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(true);

  const value: UserContext = {
    isAuthorized,
    setIsAuthorized,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default userContext;
