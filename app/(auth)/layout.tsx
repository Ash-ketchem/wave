import { Logo } from "./_components/Logo";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col gap-4">
      <Logo />

      {children}
    </div>
  );
};

export default layout;
