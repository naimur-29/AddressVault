// libraries:
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// contexts:
import sidebarContext from "../contexts/sidebarContext";

// importing icons:
import { Bookmark, ChevronRight } from "lucide-react";

// import animation variations:
import { FadeInOut } from "../animations/sidebar";

// types:
import { SidebarContext } from "../@types/sidebar";

// main:
export const NavItem = ({
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
  // contexts:
  const { setIsSidebarActive } = useContext(sidebarContext) as SidebarContext;

  return (
    <button
      onClick={() => {
        setActiveIndex(index);
        // close sidebar on mobile:
        setTimeout(() => {
          setIsSidebarActive(false);
        }, 500);
      }}
      className="relative flex gap-1 px-1 py-2 rounded-md _item"
    >
      <Bookmark />
      {context}
      {isFirst && (
        <div
          style={{
            transform: `translateY(calc(${(activeIndex || 0) * 100}% + ${
              (activeIndex || 0) * 0.25
            }rem))`,
          }}
          className={`_active-overlay absolute bg-[--primary-violet-op55] top-0 left-0 w-full h-full rounded-md -z-10 duration-200`}
        ></div>
      )}
    </button>
  );
};

// NavItemExpandable Component:
export const NavItemExpandable = ({
  context,
  subItems,
  index,
  setActiveIndex,
  activeIndex,
}: {
  context: string;
  subItems: string[];
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
}) => {
  // states:
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  // contexts:
  const { setIsSidebarActive } = useContext(sidebarContext) as SidebarContext;

  // useEffects:
  useEffect((): void => {
    if (activeIndex !== index) {
      setIsTagsActive(false);
    }
  }, [activeIndex, index]);

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
            variants={FadeInOut}
            className="flex flex-col w-full gap-1 px-2"
          >
            {subItems.map((item, key) => (
              <motion.div
                onClick={() => {
                  setActiveSubIndex(key);
                  // close sidebar on mobile:
                  setTimeout(() => {
                    setIsSidebarActive(false);
                  }, 500);
                }}
                key={key}
                variants={FadeInOut}
                className={`${
                  key === 0 ? "relative" : ""
                } w-full px-2 py-1 text-left rounded-md`}
              >
                {item}

                {key === 0 && (
                  <div
                    style={{
                      transform: `translateY(calc(${
                        (activeSubIndex || 0) * 100
                      }% + ${(activeSubIndex || 0) * 0.25}rem))`,
                    }}
                    className={`_active-overlay absolute border-x-[2px] border-[--primary-violet-op77] bg-[--primary-violet-op33] top-0 left-0 w-full h-full rounded-md -z-10 duration-200`}
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
