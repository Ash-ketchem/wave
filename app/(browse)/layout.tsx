import React, { Suspense } from "react";
import NavBar from "./_components/navbar";
import SideBar, { SideBarSkeleton } from "./_components/sidebar";
import Container from "./_components/Container";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SideBarSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <SideBar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default layout;
