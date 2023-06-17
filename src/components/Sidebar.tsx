// importing libraries:
import { useState } from "react";

// importing icons:
import { ChevronRight, ArrowLeftFromLine, Plus } from "lucide-react";

// importing images:
import AddressVaultLogo from "../assets/imgs/address-vault.png";

// importing local components:
import Navigation from "./Navigation";
import Settings from "./Settings";
import Search from "./Search";
import AddContact from "./AddContact";

// main:
const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);

  return (
    <section
      className={`_sidebar w-screen sm:w-[270px] h-screen fixed top-0 ${
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
          <button className="flex items-center justify-between p-2 bg-[--primary-violet-op55] text-[--secondary-text-slate] rounded-md _stats">
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
    </section>
  );
};

export default Sidebar;
