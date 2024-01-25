"use client";

import { onBlock, onUnBlock } from "@/actions/block";
import { onFollow, onUnFollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

type FollowActionProps = {
  isFollowing: boolean;
  userId: string;
};

const FollowAction = ({ isFollowing, userId }: FollowActionProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    onFollow(userId)
      .then((data) => {
        toast.success(`You are now following ${data.following.username}`);
      })
      .catch((err) => {
        toast.error("something went wrong");
      });
  };
  const handleUnFollow = () => {
    onUnFollow(userId)
      .then((data) => {
        toast.success(`You have unfollowed ${data.following.username}`);
      })
      .catch((err) => {
        toast.error("something went wrong");
      });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) =>
          toast.success(`You have blocked ${data.blocked.username}`)
        )
        .catch((err) => {
          console.log(err);
          toast.error("something went wrong");
        });
    });
  };

  const handleUnBlock = () => {
    startTransition(() => {
      onUnBlock(userId)
        .then((data) =>
          toast.success(`You have unblocked ${data.blocked.username}`)
        )
        .catch((err) => {
          console.log(err);
          toast.error("something went wrong");
        });
    });
  };

  const onClick = () => {
    startTransition(() => {
      isFollowing ? handleUnFollow() : handleFollow();
    });
  };

  return (
    <>
      <Button variant="primary" onClick={onClick} disabled={isPending}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button
        variant="destructive"
        onClick={handleUnBlock}
        disabled={isPending}
      >
        block
      </Button>
    </>
  );
};

export default FollowAction;
