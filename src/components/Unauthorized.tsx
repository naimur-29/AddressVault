// importing libraries:
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// importing components:
import Layout from "./Layout";

// importing contexts:
import { userContext } from "../contexts/userContext";

// importing types:
import { Props } from "../@types/react";
import { UserContext } from "../@types/user";

// main:
const Unauthorized = ({ children }: Props) => {
  // using hooks:
  const navigate = useNavigate();

  // using contexts:
  const { isAuthorized } = useContext(userContext) as UserContext;

  console.log(isAuthorized);

  // redirecting back if not authorized:
  useEffect(() => {
    if (!isAuthorized) {
      navigate("/");
    }
  }, [navigate, isAuthorized]);

  return <Layout>{children}</Layout>;
};

export default Unauthorized;
