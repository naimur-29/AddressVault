// importing libraries:
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// importing icons:
import { Plus } from "lucide-react";

// animations:
import { FadeInIn, DropDown } from "../../animations/animations";

const AddContact = () => {
  const [isAddContactModalActive, setIsAddContactModalActive] =
    useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsAddContactModalActive(true)}
        className="flex items-center justify-center w-full gap-1 p-2 bg-[--primary-blue] text-lg font-semibold text-[--primary-text-slate] hover:bg-[--primary-blue-light] duration-300 active:scale-90 rounded-md _add-contact"
      >
        Add Contact <Plus />
      </button>

      <AnimatePresence>
        {isAddContactModalActive && (
          <motion.div
            variants={FadeInIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="_wrapper fixed top-0 right-0 w-full sm:w-[calc(100vw-270px)] h-full bg-[--primary-violet-op33] sm:backdrop-blur-sm flex items-center justify-center px-5 z-50"
          >
            <motion.div
              variants={DropDown}
              className="_modal w-full md:w-[540px] min-h-[50%] bg-white rounded"
            >
              <button onClick={() => setIsAddContactModalActive(false)}>
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

export default AddContact;
