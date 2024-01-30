import { ReactNode } from "react";
import { TooltipProvider, Tooltip, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

type HintProps = {
  children: ReactNode;
  label: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  aschild: boolean;
};

const Hint = ({ label, side, align, aschild, children }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={aschild}>{children}</TooltipTrigger>
        <TooltipContent
          className="text-black bg-white rounded-sm !z-50"
          align={align}
          side={side}
        >
          <p className="font-semibold text-sm p-2">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default Hint;
