// importing libraries:
import { useState } from "react";

// importing icons:
import {
  Search,
  Bookmark,
  ChevronRight,
  ArrowLeftFromLine,
  Plus,
  Settings,
} from "lucide-react";

// main:
const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);

  return (
    <section
      className={`_sidebar w-screen sm:w-[270px] h-screen fixed top-0 ${
        isSidebarActive ? "left-0" : "left-[-100%]"
      } bg-slate-800 z-40 px-4 duration-200`}
    >
      <div className="flex flex-col justify-between h-full py-4 _container">
        <div className="flex flex-col gap-4 _top">
          {/* Logo Section */}
          <div className="flex items-center justify-between mb-2 _logo bg-[#fff3] rounded-md">
            <img src="/" alt="AddressVault Logo" />

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
              className="w-full px-2 duration-100 bg-transparent rounded-md outline-none h-9 focus:bg-white"
            />
            <span className="absolute top-0 left-0 flex items-center w-full gap-1 px-1 bg-white rounded-md h-9 -z-10">
              <Search />
              Search
            </span>
          </div>

          {/* Nav Section */}
          <div className="flex flex-col gap-1 text-white cursor-pointer _nav">
            <div className="_item flex gap-1 hover:bg-[#fff3] px-1 py-2 rounded-md">
              <Bookmark />
              Navigation Item
            </div>

            <div
              onClick={() => {
                document.querySelector("._btn")?.classList.toggle("rotate-90");
                setIsTagsActive(!isTagsActive);
              }}
              className="_item flex flex-col gap-2 hover:bg-[#fff3] px-1 py-2 rounded-md"
            >
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Bookmark absoluteStrokeWidth />
                  Tags
                </div>

                <button className="duration-100 _btn">
                  <ChevronRight absoluteStrokeWidth />
                </button>
              </div>

              {isTagsActive ? (
                <div className="flex flex-col gap-1 px-2">
                  <div className="w-full px-1 py-2 border border-transparent rounded-md hover:border-white">
                    Navigation Item
                  </div>
                  <div className="w-full px-1 py-2 border border-transparent rounded-md hover:border-white">
                    Navigation Item
                  </div>
                  <div className="w-full px-1 py-2 border border-transparent rounded-md hover:border-white">
                    Navigation Item
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
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
