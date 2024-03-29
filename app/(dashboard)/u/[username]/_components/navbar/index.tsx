import Actions from "./Actions";
import { Logo } from "./logo";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-50 bg-[#252731] px-2 lg:px-4 flex justify-between items-center flex-1">
      <Logo />
      {/*@ts-expect-error Server Component*/}
      <Actions />
    </nav>
  );
};

export default NavBar;
