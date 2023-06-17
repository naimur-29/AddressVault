export type SidebarContext = {
  isSidebarActive: boolean;
  setIsSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};
