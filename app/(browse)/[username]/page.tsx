import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import FollowAction from "./_components/FollowAction";
import { isBlockedByUser } from "@/lib/block-service";

type UserPageProps = {
  params: {
    username: string;
  };
};

const page = async ({ params: { username } }: UserPageProps) => {
  const user = await getUserByUsername(username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  const isBlocked = await isBlockedByUser(user.id);

  // if (isBlocked) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col gap-y-4">
      page {user.username}
      {`following : ${isFollowing}`}
      {`is blocked by this user : ${isBlocked}`}
      <FollowAction isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};

export default page;
