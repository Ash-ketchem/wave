"use client";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type fieldType = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

type ToggleCardProps = {
  field: fieldType;
  value: boolean;
  label: string;
};

const ToggleCard = ({ field, value = false, label }: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({
        // computed property names
        [field]: !value,
      })
        .then(() => toast.success("Chat settings updated"))
        .catch(() => toast.error("Something went wrong"));
    });
  };
  return (
    <div className="rounded-xl bg-muted p-6 w-full ">
      <div className="flex items-center justify-between gap-x-4 h-full w-full">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            className="mt-1"
            onCheckedChange={onChange}
            disabled={isPending}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full" />;
};

export default ToggleCard;
