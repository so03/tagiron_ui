import RoomTitle from "./RoomTItle";
import { RoomUserInfo } from "./RoomUserInfo";
import { RoomMembersCurrentList } from "./RoomMembersCurrentList";
import { RoomGameStartButton } from "./RoomGameStartButton";
import { RoomMemberWait } from "./RoomMemberWait";
import { RoomMemberForm } from "./RoomMemberForm";
import React from "react";
import { UserInfo } from "../models/UserInfo";
import { Member } from "../models/member";

// https://zenn.dev/ogakuzuko/articles/react-typescript-for-beginner
type Props = {
  userInfo: UserInfo;
  members: Member[];
  userInfoId: string;
  saveMember: () => {};
  startGame: (flag: boolean) => {};
};

export const Room: React.VFC<Props> = ({ userInfo, members, saveMember, startGame }) => {
  return (
    <div className="container mx-auto max-w-sm font-extralight">
      <RoomTitle />
      <RoomUserInfo userInfo={userInfo} />
      <RoomMembersCurrentList members={members} />
      {userInfo.id ? (
        <RoomMemberWait userInfoId={userInfo.id} />
      ) : (
        <RoomMemberForm saveMember={saveMember} />
      )}
      <RoomGameStartButton members={members} startGame={startGame} />
    </div>
  );
};
