// libraries:
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// components:
import Loading from "../components/Loading";
import SignIn from "../components/auth/SignIn";
import CreateAccount from "../components/auth/CreateAccount";
import SignInWithGoogle from "../components/auth/SignInWithGoogle";

// contexts:
import userContext from "../contexts/userContext";

// assets:
import AddressVaultLogo from "../assets/imgs/address-vault.png";
import BackgroundImage from "../assets/imgs/landing-bg.webp";

// animations:
import { FadeInIn } from "../animations/animations";

// types:
import { UserContext } from "../@types/user";

// main:
const LandingPage = () => {
  // states:
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // using hooks:
  const navigate = useNavigate();

  // contexts:
  const { isAuthorized } = useContext(userContext) as UserContext;

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
    <section className="relative flex items-center justify-center w-full h-screen bg-[--primary-blue-dark-op99] shadow-[inset_0px_-3px_40px_var(--primary-violet-op77),inset_0px_3px_12px_var(--primary-violet-op77)] p-[20px]">
      {/* BACKGROUND OVERLAY */}
      <div
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-[--primary-blue-dark]"
      ></div>

      <motion.div
        variants={FadeInIn}
        initial="hidden"
        animate="visible"
        className="w-[720px] min-h-[90vh] sm:min-h-[70vh] p-[20px] flex flex-col items-center rounded bg-[--primary-blue-dark-op99] text-[--primary-text-slate] shadow-2xl border-[4px] border-[--primary-violet-light] border-dashed"
      >
        <div className="flex items-center justify-start w-full gap-2 bg-[--primary-violet-op33] p-2 mb-12 rounded z-10">
          <img
            src={AddressVaultLogo}
            alt="address vault logo"
            className="object-contain w-9"
          />
          <span className="text-2xl font-semibold text-[--primary-text-slate]">
            Address Vault
          </span>
        </div>

        <div className="flex flex-col items-center flex-grow w-full gap-4 mb-4 lg:w-2/3">
          <AnimatePresence>
            {isNewUser ? (
              <CreateAccount
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <SignIn
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            )}
          </AnimatePresence>

          <div className="flex justify-start w-full mx-1">
            {isNewUser ? (
              <h2>
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsNewUser(false);
                    setErrorMessage("");
                  }}
                  className="text-blue-400 hover:underline"
                >
                  Sign In
                </button>
              </h2>
            ) : (
              <h2>
                New here?{" "}
                <button
                  onClick={() => {
                    setIsNewUser(true);
                    setErrorMessage("");
                  }}
                  className="text-blue-400 hover:underline"
                >
                  Create an account
                </button>
              </h2>
            )}
          </div>
        </div>

        <SignInWithGoogle />
      </motion.div>
    </section>
  );
};

export default LandingPage;
