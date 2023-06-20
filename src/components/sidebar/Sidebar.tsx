// importing libraries:
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// contexts:
import sidebarContext from "../../contexts/sidebarContext";

// importing icons:
import { ChevronRight, ArrowLeftFromLine } from "lucide-react";

// import animation variations:
import { PopInOut, FadeInOut } from "../../animations/sidebar";

// importing images:
import AddressVaultLogo from "../../assets/imgs/address-vault.png";

// importing local components:
import Navigation from "./Navigation";
import Settings from "./Settings";
import Search from "./Search";
import AddContact from "./AddContact";

// types:
import { SidebarContext } from "../../@types/sidebar";

// main:
const Sidebar = () => {
  // states:

  // contexts:
  const {
    isSidebarActive,
    setIsSidebarActive,
    setActiveIndex,
    isUntaggedActive,
    setIsUntaggedActive,
  } = useContext(sidebarContext) as SidebarContext;

  // hooks:
  const navigate = useNavigate();

  return (
    <section
      className={`_sidebar w-screen sm:w-[270px] h-screen fixed top-0 sm:left-0 ${
        isSidebarActive ? "left-0" : "left-[-100%]"
      } bg-[--primary-blue-dark] z-40 px-4 duration-200 select-none border-r-2 border-[--primary-violet-op77]`}
    >
      <div className="flex flex-col justify-between h-full py-4 _container">
        <div className="flex flex-col gap-4 _top">
          {/* Logo Section */}
          <div className="flex items-center justify-between mb-2 _logo bg-[--primary-violet-op33] rounded-md px-2 py-2">
            <button className="flex items-center w-full gap-2">
              <img
                src={AddressVaultLogo}
                alt="address vault logo"
                className="object-contain w-9"
              />
              <span className="text-lg font-semibold text-[--primary-text-slate]">
                Address Vault
              </span>
            </button>

            <button
              onClick={() => setIsSidebarActive(false)}
              className="flex items-center justify-center text-[--primary-text-slate] sm:invisible"
            >
              <ArrowLeftFromLine />
            </button>
          </div>

          {/* Search Section */}
          <Search />

          {/* Nav Section */}
          <Navigation />

          {/* Stats Section */}
          <button
            onClick={() => {
              setIsUntaggedActive((prev) => !prev);
              setIsSidebarActive(false);
              setActiveIndex(0);
              navigate("/dashboard");
            }}
            style={{
              backgroundColor: isUntaggedActive
                ? "var(--primary-violet-op77)"
                : "var(--primary-violet-op33)",
            }}
            className="flex items-center justify-between p-2 text-[--secondary-text-slate] rounded-md _stats duration-200"
          >
            <div className="flex flex-col gap-1">
              <p>Untagged</p>
              <p className="text-left">41</p>
            </div>

            <ChevronRight />
          </button>

          {/* Add Contact Section */}
          <AddContact />
        </div>

        <div className="_bottom">
          {/* User Section */}
          <Settings />
        </div>
      </div>

      <AnimatePresence>
        {/* mobile hamburger menu system */}
        {!isSidebarActive && (
          <motion.div
            onClick={() => setIsSidebarActive(true)}
            variants={PopInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="_hamburger cursor-pointer fixed bottom-2 right-2 sm:invisible border-2 border-[--primary-violet] w-[70px] rounded p-1 flex flex-col items-center justify-between gap-1"
          >
            <motion.div
              variants={FadeInOut}
              className="h-full w-full bg-[--primary-violet] rounded animate-pulse"
            >
              <img
                src={AddressVaultLogo}
                alt=""
                className="object-cover object-center w-full h-full opacity-50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Sidebar;
