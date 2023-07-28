// libraries:
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../services/firebaseApi";
import { signInWithPopup } from "firebase/auth";

// components:
import Loading from "../components/Loading";

// contexts:
import userContext from "../contexts/userContext";

// assets:
import AddressVaultLogo from "../assets/imgs/address-vault.png";
import BackgroundImage from "../assets/imgs/landing-bg.webp";

// icons:
import { Mail, Lock } from "lucide-react";

// types:
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

      <div className="w-[720px] min-h-[90vh] sm:min-h-[70vh] p-[20px] flex flex-col items-center rounded bg-[--primary-blue-dark-op99] text-[--primary-text-slate] shadow-2xl border-[4px] border-[--primary-violet-light] border-dashed">
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

        <div className="flex-[1] flex flex-col items-center w-full lg:w-2/3 gap-3 _signIn z-10">
          <h3 className="mb-2 text-3xl font-semibold uppercase">Sign In</h3>

          <div className="flex flex-col w-full gap-1 rounded-lg">
            <label
              htmlFor="email"
              className="flex items-center gap-1 py-1 text-lg"
            >
              <Mail /> Email
            </label>
            <input
              style={{
                outline: "2px solid var(--primary-violet)",
              }}
              type="email"
              className="p-3 bg-[--primary-violet-op33] focus:bg-[--primary-violet-op55] rounded-br-xl text-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-col w-full gap-1 rounded-lg">
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
          </div>
        </div>

        <h3 className="z-10">-OR-</h3>

        <button
          onClick={async () => {
            await signInWithPopup(auth, googleProvider);
            if (auth.currentUser?.email) {
              setIsAuthorized(true);
            }
          }}
          className="z-10 px-8 py-2 border"
        >
          Google Sign In
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
