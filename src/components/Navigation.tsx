// importing libraries:
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// importing icons:
import { Bookmark, ChevronRight } from "lucide-react";

// import animation variations:
import { FadeInOutList } from "../animations/sidebar";

// functions:
const getOffset = (i: any): string => {
  return `translate-y-[calc(${i * 100}%+${i * 0.25}rem)]`;
};

// main:
const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-1 text-[--secondary-text-slate] cursor-pointer _nav">
      <NavItem
        context={"All People"}
        isFirst
        activeIndex={activeIndex}
        index={0}
        setActiveIndex={setActiveIndex}
      />
      <NavItem
        context={"Favorites"}
        index={1}
        setActiveIndex={setActiveIndex}
      />

      <NavItemExpandable
        context={"Tags"}
        subItems={["Family", "Friends", "Businesses", "Others"]}
        index={2}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

const NavItem = ({
  context,
  isFirst,
  activeIndex,
  index,
  setActiveIndex,
}: {
  context: string;
  isFirst?: boolean;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex?: number;
}) => {
  return (
    <button
      onClick={() => setActiveIndex(index)}
      className="relative flex gap-1 px-1 py-2 rounded-md _item"
    >
      <Bookmark />
      {context}
      {isFirst && (
        <div
          className={`_active-overlay absolute bg-[--primary-violet-op55] top-0 left-0 w-full h-full rounded-md -z-10 duration-200 ${getOffset(
            activeIndex
          )}`}
        ></div>
      )}
    </button>
  );
};

const NavItemExpandable = ({
  context,
  subItems,
  index,
  setActiveIndex,
}: {
  context: string;
  subItems: string[];
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // states:
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  return (
    <button className="flex flex-col w-full gap-3 px-1 py-2 rounded-md _item">
      <div
        onClick={() => {
          document.querySelector("._btn")?.classList.toggle("rotate-90");
          setIsTagsActive((prev) => !prev);
          setActiveIndex(index);
          setActiveSubIndex(0);
        }}
        className="flex justify-between w-full"
      >
        <div className="flex gap-1">
          <Bookmark />
          {context}
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
            {subItems.map((item, key) => (
              <motion.div
                onClick={() => {
                  setActiveSubIndex(key);
                }}
                key={key}
                variants={FadeInOutList}
                className={`${
                  key === 0 ? "relative" : ""
                } w-full px-2 py-1 text-left rounded-md`}
              >
                {item}

                {key === 0 && (
                  <div
                    className={`_active-overlay absolute border-x-[2px] border-[--primary-violet-op77] bg-[--primary-violet-op33] top-0 left-0 w-full h-full rounded-md -z-10 duration-200 ${getOffset(
                      activeSubIndex
                    )}`}
                  ></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default Navigation;
