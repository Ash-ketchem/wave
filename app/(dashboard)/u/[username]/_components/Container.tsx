"use client";

import { cn } from "@/lib/utils";
import { useCreaterSidebar } from "@/stores/use-creatorSidebar";
import { ReactNode, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

type ContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  const { collapsed, onExpand, onCollapse } = useCreaterSidebar(
    (state) => state
  );

  const matches = useMediaQuery(`(max-width : 1024px)`);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches]);
  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};

export default Container;
