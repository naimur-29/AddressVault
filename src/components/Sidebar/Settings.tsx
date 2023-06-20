// libraries:
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// importing icons:
import { Settings as SettingsIcon } from "lucide-react";

// animations:
import { FadeInIn } from "../../animations/sidebar";

const Settings = () => {
  // states:
  const [isSettingsModalActive, setIsSettingsModalActive] =
    useState<boolean>(false);

  return (
    <div className="flex items-center justify-between py-1 rounded-md cursor-pointer _user">
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
      <button
        onClick={() => setIsSettingsModalActive(true)}
        className="text-[--primary-violet-light] hover:rotate-90 hover:scale-110 duration-500 active:scale-90"
      >
        <SettingsIcon />
      </button>

      <AnimatePresence>
        {isSettingsModalActive && (
          <motion.div
            variants={FadeInIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="_wrapper fixed top-0 right-0 w-full sm:w-[calc(100vw-270px)] h-full bg-[#000] flex items-center justify-center px-5 z-50"
          >
            <motion.div
              variants={FadeInIn}
              className="_modal w-full md:w-[540px] min-h-[50%] bg-white rounded"
            >
              <button onClick={() => setIsSettingsModalActive(false)}>
                Close
              </button>

              <div>
                <label htmlFor="">Username</label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <label htmlFor="">PhotoUrl</label>
                <input type="text" name="" id="" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Settings;
