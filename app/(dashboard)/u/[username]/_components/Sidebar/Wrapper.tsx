"use client";

import { cn } from "@/lib/utils";
import { useCreaterSidebar } from "@/stores/use-creatorSidebar";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};
const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useCreaterSidebar((state) => state);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
