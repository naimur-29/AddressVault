import { motion, AnimatePresence } from "framer-motion";

// animations:
import { FadeInIn } from "../../animations/animations";

// icons:
import { Mail, Lock } from "lucide-react";

// types:
import { SignInProps } from "../../@types/auth";

const CreateAccount = ({ errorMessage, setErrorMessage }: SignInProps) => {
  return (
    <motion.div
      variants={FadeInIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="z-10 flex flex-col items-center w-full gap-3 _signIn"
    >
      <h3 className="w-full text-3xl font-semibold text-center uppercase">
        Sign Up
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
          style={{
            outline: "2px solid var(--primary-violet)",
          }}
          type="email"
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
          style={{
            outline: "2px solid var(--primary-violet)",
          }}
          type="password"
          className="p-3 bg-[--primary-violet-op33] focus:bg-[--primary-violet-op55] rounded-br-xl text-lg"
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
          <Lock /> Confirm Password
        </label>
        <input
          style={{
            outline: "2px solid var(--primary-violet)",
          }}
          type="password"
          className="p-3 bg-[--primary-violet-op33] focus:bg-[--primary-violet-op55] rounded-br-xl text-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default CreateAccount;
