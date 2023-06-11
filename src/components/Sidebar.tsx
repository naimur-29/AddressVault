// importing libraries:
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// importing icons:
import {
  Search,
  Bookmark,
  ChevronRight,
  ArrowLeftFromLine,
  Plus,
  Settings,
} from "lucide-react";

// import images:
import AddressVaultLogo from "../assets/imgs/address-vault.png";

// import animation variations:
import { FadeInOutList } from "../animations/sidebar";

// main:
const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

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
          <div className="relative _search">
            <input
              onFocus={() => setIsSearchBarActive(true)}
              onBlur={() => !searchText && setIsSearchBarActive(false)}
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              type="text"
              className={`w-full px-2 py-5 duration-100 rounded-md outline-[--primary-violet-op33] h-9 focus:bg-[--primary-violet-op33] text-[--primary-text-slate] ${
                isSearchBarActive
                  ? "bg-[--primary-violet-op33]"
                  : "bg-transparent"
              }`}
            />
            <span
              className={`absolute top-0 left-0 flex items-center w-full gap-1 px-2 py-5 bg-[--primary-violet-op33] text-[--primary-violet-op77] border-[--primary-violet-op33] border-2 duration-200 rounded-md h-9 -z-10 text-lg ${
                isSearchBarActive ? "-translate-y-3 opacity-0" : ""
              }`}
            >
              Search
            </span>

            <button className="absolute top-0 right-0 h-full px-2 text-[--primary-violet-light] hover:scale-110 active:scale-90">
              <Search />
            </button>
          </div>

          {/* Nav Section */}
          <div className="flex flex-col gap-1 text-[--secondary-text-slate] cursor-pointer _nav">
            <button className="relative flex gap-1 px-1 py-2 rounded-md _item">
              <Bookmark />
              Navigation Item
              <div className="_active-overlay absolute bg-[--primary-violet-op55] top-0 left-0 w-full h-full rounded-md -z-10 duration-200 translate-y-[calc(0*(100%+0.25rem))]"></div>
            </button>
            <button className="relative flex gap-1 px-1 py-2 rounded-md _item">
              <Bookmark />
              Navigation Item
            </button>
            <button className="relative flex gap-1 px-1 py-2 rounded-md _item">
              <Bookmark />
              Navigation Item
            </button>

            <button
              onClick={() => {
                document.querySelector("._btn")?.classList.toggle("rotate-90");
                setIsTagsActive(!isTagsActive);
              }}
              className="flex flex-col w-full gap-3 px-1 py-2 rounded-md _item"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-1">
                  <Bookmark />
                  Tags
                </div>

                <ChevronRight className="duration-100 _btn" />
              </div>

              <AnimatePresence>
                {isTagsActive && (
                  <motion.div
                    key="tags"
                    animate="visible"
                    initial="hidden"
                    exit="exit"
                    variants={FadeInOutList}
                    className="flex flex-col w-full gap-1 px-2"
                  >
                    <motion.button
                      variants={FadeInOutList}
                      className="w-full p-1 text-left border border-transparent rounded-md hover:border-[--primary-violet-op77]"
                    >
                      Navigation Item
                    </motion.button>
                    <motion.button
                      variants={FadeInOutList}
                      className="w-full p-1 text-left border border-transparent rounded-md hover:border-[--primary-violet-op77]"
                    >
                      Navigation Item
                    </motion.button>
                    <motion.button
                      variants={FadeInOutList}
                      className="w-full p-1 text-left border border-transparent rounded-md hover:border-[--primary-violet-op77]"
                    >
                      Navigation Item
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Stats Section */}
          <button className="flex items-center justify-between p-2 bg-[--primary-violet-op55] text-[--secondary-text-slate] rounded-md _stats">
            <div className="flex flex-col gap-1">
              <p>Untagged</p>
              <p className="text-left">41</p>
            </div>

            <ChevronRight />
          </button>

          {/* Add Contact Section */}
          <button className="flex items-center justify-center w-full gap-1 p-2 bg-[--primary-blue] text-lg font-semibold text-[--primary-text-slate] hover:bg-[--primary-blue-light] duration-300 active:scale-90 rounded-md _add-contact">
            Add Contact <Plus />
          </button>
        </div>

        <div className="_bottom">
          {/* User Section */}
          <div className="flex items-center justify-between py-1 rounded-md _user">
            {/* User Info/Profile */}
            <div className="flex items-center gap-2 _user-info">
              <div className="w-8 overflow-hidden bg-[primary-violet-op77] rounded-full aspect-square flex items-center">
                <img
                  src="https://www.wallpaperflare.com/static/218/678/406/digital-art-anime-girls-fantasy-art-artwork-wallpaper.jpg"
                  alt="Profile"
                  className="object-cover object-center w-full h-full rounded-full bg-[primary-violet-op77]"
                />
              </div>
              <p className="text-[--primary-text-slate] font-semibold font-mono translate-y-[2px]">
                User Name
              </p>
            </div>

            {/* Settings */}
            <button className="text-[--primary-violet-light] hover:rotate-90 hover:scale-110 duration-200 active:scale-90">
              <Settings />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
