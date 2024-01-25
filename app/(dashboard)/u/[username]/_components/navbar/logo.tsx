import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex  items-center gap-x-4 hover:opacity-75">
        <div className="bg-transparent rounded-full border p-1 mr-4 h-12 w-12  relative  shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/logos/wave.jpg"
            alt="wave"
            fill
            className="object-cover rounded-full p-1"
          />
        </div>
        <div className={cn(font.className, "hidden lg:block")}>
          <p className="font-semibold text-lg">Wave</p>
          <p className="font-semibold text-xs text-muted-foreground">
            Creater Dashborad
          </p>
        </div>
      </div>
    </Link>
  );
};
