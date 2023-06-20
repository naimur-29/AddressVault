// importing components:
import Sidebar from "./sidebar/Sidebar";

// contexts:
import { SidebarContextProvider } from "../contexts/sidebarContext";

// importing types:
import { Props } from "../@types/react";

// main:
const Layout = ({ children }: Props) => {
  return (
    <SidebarContextProvider>
      <Sidebar />
      {children}
    </SidebarContextProvider>
  );
};

export default Layout;
