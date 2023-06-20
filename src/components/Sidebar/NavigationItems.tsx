// libraries:
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// contexts:
import sidebarContext from "../../contexts/sidebarContext";

// importing icons:
import { ChevronRight } from "lucide-react";

// import animation variations:
import { FadeInOut } from "../../animations/sidebar";

// types:
import { SidebarContext } from "../../@types/sidebar";

// main:
export const NavItem = ({
  action,
  context,
  isFirst,
  index,
  icon,
}: {
  action: (context: string) => void;
  context: string;
  isFirst?: boolean;
  index: number;
  icon: any;
}) => {
  // contexts:
  const { setIsSidebarActive, activeIndex, setActiveIndex } = useContext(
    sidebarContext
  ) as SidebarContext;

  // handle functions:
  const handleOnClick = (): void => {
    setActiveIndex(index);

    // onclick:
    action(context);

    // close sidebar on mobile:
    setTimeout(() => {
      setIsSidebarActive(false);
    }, 500);
  };

  return (
    <button
      onClick={handleOnClick}
      className="relative flex gap-1 px-1 py-2 rounded-md _item"
    >
      {icon}
      {context}
      {isFirst && (
        <span
          style={{
            transform: `translateY(calc(${(activeIndex || 0) * 100}% + ${
              (activeIndex || 0) * 0.25
            }rem))`,
          }}
          className={`_active-overlay absolute bg-[--primary-violet-op55] top-0 left-0 w-full h-full rounded-md -z-10 duration-200`}
        />
      )}
    </button>
  );
};

// NavItemExpandable Component:
export const NavItemExpandable = ({
  action,
  subAction,
  context,
  subItems,
  index,
  icon,
}: {
  action: (context: string) => void;
  subAction: (context: string) => void;
  context: string;
  subItems: string[];
  index: number;
  icon: any;
}) => {
  // states:
  const [isTagsActive, setIsTagsActive] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  // contexts:
  const { setIsSidebarActive, activeIndex, setActiveIndex } = useContext(
    sidebarContext
  ) as SidebarContext;

  // useEffects:
  useEffect((): void => {
    if (activeIndex !== index) {
      setIsTagsActive(false);
      document.querySelector("._btn")?.classList.remove("rotate-90");
    }
  }, [activeIndex, index]);

  // handle functions:
  const handleOnClick = (): void => {
    // arrow button rotate on click:
    document.querySelector("._btn")?.classList.toggle("rotate-90");

    setIsTagsActive((prev) => !prev);
    setActiveIndex(index);
    setActiveSubIndex(0);

    // onclick:
    action(context);
  };

  const handleSubItemsOnClick = (key: number, item: string): void => {
    setActiveSubIndex(key);

    // onclick:
    subAction(item);

    // close sidebar on mobile:
    setTimeout(() => {
      setIsSidebarActive(false);
    }, 500);
  };

  return (
    <button className="flex flex-col w-full gap-3 px-1 py-2 rounded-md _item">
      <div onClick={handleOnClick} className="flex justify-between w-full">
        <div className="flex gap-1">
          {icon}
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
                onClick={() => handleSubItemsOnClick(key, item)}
                key={key}
                variants={FadeInOut}
                className={`${
                  key === 0 ? "relative" : ""
                } w-full px-2 py-1 text-left rounded-md`}
              >
                {item}

                {key === 0 && (
                  <span
                    style={{
                      transform: `translateY(calc(${
                        (activeSubIndex || 0) * 100
                      }% + ${(activeSubIndex || 0) * 0.25}rem))`,
                    }}
                    className={`_active-overlay absolute border-x-[2px] border-[--primary-violet-op77] bg-[--primary-violet-op33] top-0 left-0 w-full h-full rounded-md -z-10 duration-200`}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
