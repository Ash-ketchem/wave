import { Skeleton } from "@/components/ui/skeleton";
import { ToggleCardSkeleton } from "./_components/ToggleCard";

const loading = () => {
  return (
    <div className="p-6 space-y-4 w-full">
      <Skeleton className="h-10 w-[200px]" />
      <div className="space-y-4">
        <ToggleCardSkeleton />
        <ToggleCardSkeleton />
        <ToggleCardSkeleton />
      </div>
      ;
    </div>
  );
};

export default loading;
