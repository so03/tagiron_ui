import React from "react";
import { Member } from "../models/member";
import RoomMemberItem from "./RoomMemberItem";

type Props = {
  members: Member[];
};

export const RoomMembersCurrentList: React.VFC<Props> = (props) => {
  const members = props.members;
  const listItems = members.map((member: any) => (
    <RoomMemberItem name={member.name} key={member.name} />
  ));

  return (
    <div className="border-solid border-2 rounded shadow-md">
      <h3 className="text-center border-b-2 border-solid">Current Members</h3>
      <ul className="text-center">{listItems}</ul>
    </div>
  );
};
