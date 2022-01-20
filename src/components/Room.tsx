import RoomTitle from "./RoomTItle";
import RoomUserInfo from "./RoomUserInfo";
import RoomMembersCurrentList from "./RoomMembersCurrentList";
import RoomGameStartButton from "./RoomGameStartButton";
import RoomMemberWait from "./RoomMemberWait";
import RoomMemberForm from "./RoomMemberForm";

export default function Room(props: any) {
  const userInfo = props.userInfo;
  const members = props.members;
  const startGame = props.startGame;
  const removeMember = props.removeMember;
  const saveMember = props.saveMember;
  return (
    <div className="container mx-auto max-w-sm font-extralight">
      <RoomTitle />
      <RoomUserInfo userInfo={userInfo} />
      <RoomMembersCurrentList members={members} />
      {userInfo.id ? (
        <RoomMemberWait userInfoId={userInfo.id} removeMember={removeMember} />
      ) : (
        <RoomMemberForm saveMember={saveMember} />
      )}
      <RoomGameStartButton members={members} startGame={startGame} />
    </div>
  );
}
