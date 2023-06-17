// importing libraries:
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components:
import { NavItem, NavItemExpandable } from "./NavigationItems";

// importing icons:
import { Tags, Mail, Users2, Star } from "lucide-react";

// main:
const Navigation = () => {
  // states:
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // hooks:
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1 text-[--secondary-text-slate] cursor-pointer _nav">
      <NavItem
        action={() => {
          navigate("/dashboard");
        }}
        context={"All People"}
        isFirst
        activeIndex={activeIndex}
        index={0}
        setActiveIndex={setActiveIndex}
        icon={<Users2 />}
      />

      <NavItem
        action={() => {
          navigate("/dashboard");
        }}
        context={"Favorites"}
        index={1}
        setActiveIndex={setActiveIndex}
        icon={<Star />}
      />

      <NavItemExpandable
        action={() => {
          navigate("/dashboard");
        }}
        subAction={() => {}}
        context={"Tags"}
        subItems={["Family", "Friends", "Businesses", "Others"]}
        index={2}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        icon={<Tags />}
      />

      <NavItem
        action={() => {
          navigate("/mail");
        }}
        context={"Mail"}
        index={3}
        setActiveIndex={setActiveIndex}
        icon={<Mail />}
      />
    </div>
  );
};

export default Navigation;
