import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { VariantProps, cva } from "class-variance-authority";
import LiveBadge from "./LiveBadge";
import { AvatarProps } from "@radix-ui/react-avatar";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type UserAvatarProps = {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
} & VariantProps<typeof avatarSizes>;

type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;

const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-backgrounds",
          avatarSizes({
            size,
          })
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return (
    <Skeleton
      className={cn(
        "rounded-full",
        avatarSizes({
          size,
        })
      )}
    />
  );
};

export default UserAvatar;
