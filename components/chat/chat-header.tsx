import { FC } from "react";
import { Hash } from "lucide-react";
import MobileToggle from "@/components/mobile-toggle";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imgUrl?: string;
}

const ChatHeader: FC<ChatHeaderProps> = ({ serverId, name, type, imgUrl }) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
        <MobileToggle serverId={serverId} />
        {type === "channel" && (
            <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"/>
        )}
        <p className="font-semibold text-md text-black dark:text-white">
            {name}
        </p>
    </div>
  )
};

export default ChatHeader;
