// importing libraries:
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// importing contexts:
import { userContext } from "../contexts/userContext";

// importing types:
import { UserContext } from "../@types/user";

// main:
const LandingPage = () => {
  // using hooks:
  const navigate = useNavigate();

  // contexts:
  const { isAuthorized } = useContext(userContext) as UserContext;

  useEffect(() => {
    if (isAuthorized) {
      navigate("/dashboard");
    }
  }, [isAuthorized, navigate]);

  return <section>LandingPage</section>;
};

export default LandingPage;
