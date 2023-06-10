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
  LightbulbOff,
} from "lucide-react";

const list = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "linear",
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { staggerChildren: -0.1, ease: "linear" },
  },
};

// main:
const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);

  return (
    <section
      className={`_sidebar w-screen sm:w-[270px] h-screen fixed top-0 ${
        isSidebarActive ? "left-0" : "left-[-100%]"
      } bg-black z-40 px-4 duration-200 select-none border-r-2 border-[#fff3]`}
    >
      <div className="flex flex-col justify-between h-full py-4 _container">
        <div className="flex flex-col gap-4 _top">
          {/* Logo Section */}
          <div className="flex items-center justify-between mb-2 _logo bg-[#fff3] rounded-md px-1">
            <button className="text-white">
              <LightbulbOff />
            </button>

            <button
              onClick={() => setIsSidebarActive(false)}
              className="p-2 text-white sm:invisible"
            >
              <ArrowLeftFromLine />
            </button>
          </div>

          {/* Search Section */}
          <div className="relative _search">
            <input
              type="text"
              className="w-full px-2 py-5 duration-100 bg-transparent rounded-md outline-[#fff3] h-9 focus:bg-[#fff3]"
            />
            <span className="absolute top-0 left-0 flex items-center w-full gap-1 px-1 py-5 bg-[#fff2] text-[#fff7] border-[#fff2] border-2 rounded-md h-9 -z-10 text-lg">
              <Search />
              Search
            </span>
          </div>

          {/* Nav Section */}
          <div className="flex flex-col gap-1 text-white cursor-pointer _nav">
            <button className="_item relative flex gap-1 px-1 py-2 rounded-md">
              <Bookmark />
              Navigation Item
              <div className="_active-overlay bg-[#fff3] absolute top-0 left-0 w-full h-full rounded-md -z-10 duration-200 translate-y-[calc(0*(100%+0.25rem))]"></div>
            </button>

            <button
              onClick={() => {
                document.querySelector("._btn")?.classList.toggle("rotate-90");
                setIsTagsActive(!isTagsActive);
              }}
              className="_item flex flex-col gap-3 px-1 py-2 rounded-md w-full"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-1">
                  <Bookmark absoluteStrokeWidth />
                  Tags
                </div>

                <button className="duration-100 _btn">
                  <ChevronRight absoluteStrokeWidth />
                </button>
              </div>

              <AnimatePresence>
                {isTagsActive && (
                  <motion.div
                    key="tags"
                    animate="visible"
                    initial="hidden"
                    exit="exit"
                    variants={list}
                    className="w-full flex flex-col gap-1 px-2"
                  >
                    <motion.button
                      variants={list}
                      className="w-full text-left p-1 border border-transparent rounded-md hover:border-white"
                    >
                      Navigation Item
                    </motion.button>
                    <motion.button
                      variants={list}
                      className="w-full text-left p-1 border border-transparent rounded-md hover:border-white"
                    >
                      Navigation Item
                    </motion.button>
                    <motion.button
                      variants={list}
                      className="w-full text-left p-1 border border-transparent rounded-md hover:border-white"
                    >
                      Navigation Item
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-between p-2 bg-white rounded-md _stats">
            <div className="flex flex-col gap-1">
              <p>Untagged</p>
              <p>41</p>
            </div>

            <ChevronRight absoluteStrokeWidth />
          </div>

          {/* Add Contact Section */}
          <button className="flex items-center justify-center w-full gap-1 p-2 bg-white rounded-md _add-contact">
            Add Contact <Plus />
          </button>
        </div>

        <div className="_bottom">
          {/* User Section */}
          <div className="_user bg-[#fff3] rounded-md flex justify-between p-2">
            {/* User Info/Profile */}
            <div className="flex gap-2 _user-info">
              <img src="/" alt="Profile" />
              <p>User Name</p>
            </div>

            {/* Settings */}
            <button>
              <Settings />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
