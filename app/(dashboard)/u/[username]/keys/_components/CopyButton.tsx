"use client";

import { Button } from "@/components/ui/button";
import { CheckCheck, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  value?: string;
};
const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);

    navigator.clipboard.writeText(value);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;
  return (
    <Button
      size="sm"
      variant="ghost"
      disabled={!value || isCopied}
      onClick={onCopy}
    >
      <Icon className="w-4 h-4" />
    </Button>
  );
};

export default CopyButton;
