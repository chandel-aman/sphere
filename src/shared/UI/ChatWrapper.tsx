import React from "react";

interface ChatWrapperProps {
  uniqueKey: string;
  onClick: () => void;
  imgSrc: string;
  chatName: string;
  lastMessagePreview: string;
  time: string;
  messageCount: number;
  online: boolean;
  active: boolean;
}

const ChatWrapper: React.FC<ChatWrapperProps> = ({
  uniqueKey,
  onClick,
  imgSrc,
  chatName,
  lastMessagePreview,
  time,
  messageCount,
  online,
  active,
}) => {
  return (
    <li
      key={uniqueKey}
      onClick={onClick}
      className={`${
        active
          ? "bg-gradient-to-r from-gradient via-transparent to-transparent"
          : ""
      } w-full flex flex-row items-center gap-1.75 mb-2 cursor-pointer relative p-1 rounded-2xl`}
    >
      <span
        className={`w-12 h-12 rounded-full ${
          online ? "bg-green-500" : ""
        } relative`}
      >
        <img
          src={imgSrc}
          alt="desktop profile of users"
          className="w-12 h-12 rounded-full"
        />
        {online && (
          <span className="absolute bottom-0 right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </span>
      <span className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <h5 className="m-0">{chatName}</h5>
          <span>{time}</span>
        </div>
        <span className="flex items-center justify-between text-xs">
          <span className="flex items-center">
            {lastMessagePreview}
            <span className="bg-send-color text-white text-xs font-semibold rounded-full h-3 w-3 flex items-center justify-center ml-1">
              {messageCount}
            </span>
          </span>
        </span>
      </span>
    </li>
  );
};

export default ChatWrapper;
