import { User } from "@prisma/client";
import { getSelf } from "./auth-service";
import { db } from "./db";

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();

    if (self.id === id) {
      return true;
    }

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    /*
    in relation
    sam(me) follows ram
    so => 
        followingId = ram.id(other guy)
        followerId = sam.id(my id)

    */
    const existingFollow = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });

    return !!existingFollow;
  } catch (error) {
    return false;
  }
};

export const followUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) throw new Error("User no found");

  if (otherUser.id === self.id) throw new Error("Cannot follow yourself");

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (existingFollow) {
    throw new Error("Already following ");
  }

  const followUser = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: otherUser.id,
    },
    include: {
      follower: true,
      following: true,
    },
  });

  return followUser;
};

export const unFollowUser = async (id: string) => {
  const self = await getSelf();

  const otherUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!otherUser) throw new Error("User no found");

  if (otherUser.id === self.id) throw new Error("Cannot unfollow yourself");

  const existingFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: otherUser.id,
    },
  });

  if (!existingFollow) {
    throw new Error("Not following the user");
  }

  const unFollowUser = await db.follow.delete({
    where: {
      id: existingFollow.id,
    },
    include: {
      following: true,
    },
  });

  return unFollowUser;
};

export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();

    const followedUsers = db.follow.findMany({
      where: {
        followerId: self.id,

        following: {
          Blocking: {
            none: {
              blockedId: self.id,
            },
          },
        },
      },
      include: {
        following: true,
      },
    });

    return followedUsers;
  } catch (error) {
    return [];
  }
};
