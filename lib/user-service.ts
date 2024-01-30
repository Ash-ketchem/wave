import { db } from "./db";

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    include: {
      stream: true,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};

export const getUserByUserid = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
    include: {
      stream: true,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};
