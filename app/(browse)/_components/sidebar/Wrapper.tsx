"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/stores/use-Sidebar";
import { ReactNode, useEffect, useState } from "react";
import { ToggleSkeleton } from "./Toggle";
import { RecommendedSkeleton } from "./Recommended";
import { useIsClient } from "usehooks-ts";
import { FollowingSkeleton } from "./Following";

type WrapperProps = {
  children: ReactNode;
};
const Wrapper = ({ children }: WrapperProps) => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const isClient = useIsClient();

  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col lg:w-60 w-[70px] h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60  h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
