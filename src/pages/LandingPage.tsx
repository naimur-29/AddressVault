// importing libraries:
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../services/firebaseApi";
import { signInWithPopup } from "firebase/auth";

// importing contexts:
import userContext from "../contexts/userContext";

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

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-white bg-slate-800">
      <h2>Landing Page</h2>
      <button
        onClick={async () => {
          await signInWithPopup(auth, googleProvider);
          console.log(auth.currentUser);
        }}
        className="px-8 py-2 border"
      >
        Google Sign In
      </button>
    </section>
  );
};

export default LandingPage;
