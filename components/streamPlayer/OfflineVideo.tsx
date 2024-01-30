import { WifiOff } from "lucide-react";

type OfflineVideoProps = {
  username: string;
};

const OfflineVideo = ({ username }: OfflineVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center w-full">
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground">{username} is offline</p>
    </div>
  );
};

export default OfflineVideo;
