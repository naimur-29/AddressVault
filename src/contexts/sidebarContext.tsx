// libraries:
import { useState, createContext } from "react";

// types:
import { SidebarContext } from "../@types/sidebar";
import { Props } from "../@types/react";

// creating context:
const sidebarContext = createContext<SidebarContext | null>(null);

// main:
export const SidebarContextProvider = ({ children }: Props) => {
  // states:
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  // context value:
  const value = {
    isSidebarActive,
    setIsSidebarActive,
  };

  return (
    <sidebarContext.Provider value={value}>{children}</sidebarContext.Provider>
  );
};

export default sidebarContext;
