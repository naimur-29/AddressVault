import { useContext } from "react";
import { auth, googleProvider } from "../../services/firebaseApi";
import { signInWithPopup } from "firebase/auth";

// icons:
import { FcGoogle } from "react-icons/fc";

// contexts:
import userContext from "../../contexts/userContext";

// hooks:
import useCreateNewUser from "../../hooks/useCreateNewUser";

// types:
import { UserContext } from "../../@types/user";

const SignInWithGoogle = () => {
  // use contexts:
  const { setIsAuthorized } = useContext(userContext) as UserContext;

  // use hooks:
  const { createNewUser } = useCreateNewUser();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      // create new user on db record:
      if (auth.currentUser?.email) {
        createNewUser({
          uid: auth?.currentUser?.uid,
          username: auth?.currentUser?.email,
          photoUrl: auth?.currentUser?.photoURL || "",
        });

        setIsAuthorized(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="z-10">-OR-</h3>

      <button
        onClick={handleSignIn}
        className="z-10 flex items-center justify-center gap-1 px-8 py-2 rounded bg-[#fff3] font-semibold hover:bg-[#fff5]"
      >
        <FcGoogle size={22} />
        Sign In With Google
      </button>
    </div>
  );
};

export default SignInWithGoogle;
