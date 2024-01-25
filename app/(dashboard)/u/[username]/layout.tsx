import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import NavBar from "./_components/navbar";
import SideBar from "./_components/Sidebar";
import Container from "./_components/Container";

type layoutProps = {
  children: ReactNode;
  params: {
    username: string;
  };
};

const layout = async ({ children, params }: layoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }

  return (
    <>
      <Container>
        <NavBar />
        <div className="flex h-full pt-20">
          <SideBar />
          {children}
        </div>
      </Container>
      ;
    </>
  );
};

export default layout;
