"use client";

import { useSidebar } from "@/stores/use-Sidebar";
import { Follow, Stream, User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./UserItem";

type FollowingProps = {
  data: (Follow & {
    following: User & {
      stream: {
        isLive: boolean;
      } | null;
    };
  })[];
};
const Following = ({ data }: FollowingProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }
  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4   w-full">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            imageUrl={user.following.imageUrl}
            username={user.following.username}
            isLive={user.following.stream?.isLive}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};

export default Following;
