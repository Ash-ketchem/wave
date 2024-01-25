import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="bg-transparent rounded-full p-1  h-14 w-14 relative flex flex-col">
        <Image
          src="/logos/wave.jpg"
          alt="wave"
          fill
          className="object-cover rounded-full p-1"
        />
      </div>
      <div
        className={cn(
          font.className,
          "flex items-center justify-center w-full"
        )}
      >
        <p className="font-semibold text-xl">Wave</p>
      </div>
    </div>
  );
};
