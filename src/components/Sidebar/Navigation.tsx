// importing libraries:
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// contexts:
import sidebarContext from "../../contexts/sidebarContext";

// components:
import { NavItem, NavItemExpandable } from "./NavigationItems";

// importing icons:
import { Tags, Mail, Users2, Star } from "lucide-react";

// types:
import { SidebarContext } from "../../@types/sidebar";

// main:
const Navigation = () => {
  // contexts:
  const { setIsUntaggedActive } = useContext(sidebarContext) as SidebarContext;

  // hooks:
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1 text-[--secondary-text-slate] cursor-pointer _nav">
      <NavItem
        action={() => {
          navigate("/dashboard");
          setIsUntaggedActive(false);
        }}
        context={"All People"}
        isFirst
        index={0}
        icon={<Users2 />}
      />

      <NavItem
        action={() => {
          navigate("/dashboard");
          setIsUntaggedActive(false);
        }}
        context={"Favorites"}
        index={1}
        icon={<Star />}
      />

      <NavItemExpandable
        action={() => {
          navigate("/dashboard");
          setIsUntaggedActive(false);
        }}
        subAction={() => {}}
        context={"Tags"}
        subItems={["Family", "Friends", "Businesses", "Others"]}
        index={2}
        icon={<Tags />}
      />

      <NavItem
        action={() => {
          navigate("/mail");
          setIsUntaggedActive(false);
        }}
        context={"Mail"}
        index={3}
        icon={<Mail />}
      />
    </div>
  );
};

export default Navigation;
