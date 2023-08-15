import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseApi";

// contexts:
import userContext from "../../contexts/userContext";

// animations:
import { FadeInIn } from "../../animations/animations";

// icons:
import { Mail, Lock, Forward, Loader } from "lucide-react";

// types:
import { SignInProps } from "../../@types/auth";
import { UserContext } from "../../@types/user";

const SignIn = ({ errorMessage, setErrorMessage }: SignInProps) => {
  // states:
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // use context:
  const { setIsAuthorized } = useContext(userContext) as UserContext;

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMessage("Invalid info!");
      return;
    } else if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Invalid email!");
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage("");
      setIsAuthorized(true);
    } catch (error) {
      const msg: string = String(error);
      setErrorMessage(msg.slice(msg.indexOf("/") + 1, msg.indexOf(")")));
    }
    setIsLoading(false);
  };

  // erase error message after 5sec
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }, [errorMessage, setErrorMessage]);

  return (
    <motion.div
      variants={FadeInIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="z-10 flex flex-col items-center w-full gap-3 _signIn"
    >
      <h3 className="w-full text-3xl font-semibold text-center uppercase">
        Sign In
      </h3>

      <AnimatePresence>
        {!!errorMessage && (
          <motion.h3
            variants={FadeInIn}
            className="w-full p-2 font-semibold text-center bg-pink-600 rounded text-md animate-pulse"
          >
            {errorMessage}
          </motion.h3>
        )}
      </AnimatePresence>

      <motion.div
        variants={FadeInIn}
        className="flex flex-col w-full gap-1 rounded-lg"
      >
        <label htmlFor="email" className="flex items-center gap-1 py-1 text-lg">
          <Mail /> Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{
            outline: "2px solid var(--primary-violet)",
          }}
          type="email"
          placeholder="ex: username@gmail.com"
          className="p-3 bg-[--primary-violet-op33] focus:bg-[--primary-violet-op55] rounded-br-xl text-lg shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={FadeInIn}
        className="flex flex-col w-full gap-1 rounded-lg"
      >
        <label
          htmlFor="password"
          className="flex items-center gap-1 py-1 text-lg"
        >
          <Lock /> Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={{
            outline: "2px solid var(--primary-violet)",
          }}
          type="password"
          placeholder="**********"
          className="p-3 bg-[--primary-violet-op33] focus:bg-[--primary-violet-op55] rounded-br-xl text-lg"
        />
      </motion.div>

      <motion.button
        onClick={handleSignIn}
        variants={FadeInIn}
        className="p-3 mt-1 bg-[--primary-violet-op33] hover:bg-[--primary-violet-op77] duration-300 rounded text-lg w-full font-semibold uppercase flex items-center justify-center gap-1"
      >
        {isLoading ? (
          <>
            Loading
            <Loader className="text-white animate-spin" />
          </>
        ) : (
          <>
            Proceed
            <Forward />
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default SignIn;
