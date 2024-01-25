import { create } from "zustand";

type CreaterSidebarProps = {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
};

export const useCreaterSidebar = create<CreaterSidebarProps>((set) => ({
  collapsed: false,
  onExpand: () =>
    set({
      collapsed: false,
    }),
  onCollapse: () =>
    set({
      collapsed: true,
    }),
}));
