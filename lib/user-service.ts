import { db } from "./db";

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return null;
  }

  return user;
};
