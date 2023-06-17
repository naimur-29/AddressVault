// importing libraries:
import { useState } from "react";

// components:
import { NavItem, NavItemExpandable } from "./NavigationItems";

// main:
const Navigation = () => {
  // states:
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
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default Navigation;
