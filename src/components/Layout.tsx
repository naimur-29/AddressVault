// importing libraries:
import React from "react";

// importing components:
import Sidebar from "./Sidebar";

// importing types:
import { Props } from "../@types/react";

// main:
const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
