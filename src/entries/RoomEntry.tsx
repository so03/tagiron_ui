import { Suspense } from "react";
import * as mocks from "../mocks/mocks";
import { useData } from "../api";
import Room from "../components/Room";

export default function RoomEntry() {
  const { userInfo } = mocks.useData();
  const { members } = useData();
  const { startGame, saveMember, removeMember } = mocks.actions;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RoomReader
        userInfo={userInfo}
        members={members}
        startGame={startGame}
        saveMember={saveMember}
        removeMember={removeMember}
      />
    </Suspense>
  );
}

function RoomReader(props: any) {
  const userInfo = props.userInfo.read();
  const members = props.members.read();
  const startGame = props.startGame;
  const saveMember = props.saveMember;
  const removeMember = props.removeMember;

  return (
    <Room
      userInfo={userInfo}
      members={members}
      startGame={startGame}
      saveMember={saveMember}
      removeMember={removeMember}
    />
  );
}
