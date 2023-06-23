// importing libraries:
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../services/firebaseApi";
import { signInWithPopup } from "firebase/auth";

// components:
import Loading from "../components/Loading";

// importing contexts:
import userContext from "../contexts/userContext";

// importing types:
import { UserContext } from "../@types/user";

// main:
const LandingPage = () => {
  // states:
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // using hooks:
  const navigate = useNavigate();

  // contexts:
  const { isAuthorized, setIsAuthorized } = useContext(
    userContext
  ) as UserContext;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/dashboard");
    }
  }, [isAuthorized, navigate]);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="flex flex-col items-center justify-center min-h-screen text-white bg-slate-800">
      <h2>Landing Page</h2>
      <button
        onClick={async () => {
          await signInWithPopup(auth, googleProvider);
          if (auth.currentUser?.email) {
            setIsAuthorized(true);
          }
        }}
        className="px-8 py-2 border"
      >
        Google Sign In
      </button>
    </section>
  );
};

export default LandingPage;
