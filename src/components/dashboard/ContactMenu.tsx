// importing libraries:
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// animations:
import { FadeInIn } from "../../animations/animations";

const ContactMenu = () => {
  const [isContactMenuActive, setIsContactMenuActive] =
    useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsContactMenuActive(true)}
        className="flex items-center justify-center h-full gap-1 p-2 rounded-full cursor-pointer _right aspect-square active:scale-110"
      >
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-violet]"></div>
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-violet]"></div>
        <div className="_dot w-1 h-1 rounded-full bg-[--primary-violet]"></div>
      </div>

      <AnimatePresence>
        {isContactMenuActive && (
          <motion.div
            variants={FadeInIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="_wrapper fixed top-0 right-0 w-full sm:w-[calc(100vw-270px)] h-full bg-[--primary-violet-op33] sm:backdrop-blur-sm flex items-center justify-center px-5 z-50"
          >
            <motion.div
              variants={FadeInIn}
              className="_modal w-full md:w-[540px] min-h-[50%] bg-white rounded text-black"
            >
              <button onClick={() => setIsContactMenuActive(false)}>
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
    </>
  );
};

export default ContactMenu;
