"use client";

import { Fullscreen, Maximize, Minimize } from "lucide-react";
import Hint from "../Hint";

type FullScreenControlProps = {
  isFullScreen: boolean;
  onToggle: () => void;
};

const FullScreenControl = ({
  isFullScreen,
  onToggle,
}: FullScreenControlProps) => {
  const Icon = isFullScreen ? Minimize : Maximize;

  const label = isFullScreen ? "Exit Fullscreen" : "Enter FullScreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label} aschild>
        <button
          className="text-white p-1.5 hover:bg-white/10 rounded-lg"
          onClick={onToggle}
        >
          <Icon className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};

export default FullScreenControl;
