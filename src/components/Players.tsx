import PlayersList from "./PlayersList";
import PlayersTurnText from "./PlayersTurnText";

export default function Players(props: any) {
  const player = props.player;
  const players = props.players;
  return (
    <>
      <PlayersTurnText playerCurrentTurn={player} />
      <PlayersList players={players} />
    </>
  );
}
