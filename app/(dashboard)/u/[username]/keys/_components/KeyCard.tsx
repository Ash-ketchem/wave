"use client";

import { Input } from "@/components/ui/input";
import CopyButton from "./CopyButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type KeyCardProps = {
  value: string | null;
};

const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-cener justify-center  gap-x-10 font-semibold ">
        <p className="font-semibold shrink-0 flex justify-center items-center">
          Stream Key
        </p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream Key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button
            size="sm"
            variant="link"
            onClick={() => setShow((show) => !show)}
          >
            {show ? "hide" : "show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
