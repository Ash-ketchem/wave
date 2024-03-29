import { getRecommended } from "@/lib/recommended-service";
import Recommended, { RecommendedSkeleton } from "./Recommended";
import Toggle, { ToggleSkeleton } from "./Toggle";
import Wrapper from "./Wrapper";
import { getFollowedUsers } from "@/lib/follow-service";
import Following, { FollowingSkeleton } from "./Following";
import { User } from "@prisma/client";

const SideBar = async () => {
  const recommendedUsers = await getRecommended();

  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommendedUsers} />
      </div>
    </Wrapper>
  );
};

export const SideBarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

export default SideBar;
