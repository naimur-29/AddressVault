// importing libraries:
import React, { createContext, useState } from "react";

// importing types:
import { UserContext } from "../@types/user";

// creating context:
export const userContext = createContext<UserContext | null>(null);

// types:
type Props = {
  children: React.ReactNode;
};

// main:
export const UserContextProvider = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const value: UserContext = {
    isAuthorized,
    setIsAuthorized,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
