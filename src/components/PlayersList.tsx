import PlayersListItem from "./PlayersListItem";

export default function PlayersList(props: any) {
  const players = props.players;
  return (
    <div>
      <ul>
        {players.map((player: any) => (
          <PlayersListItem key={player.id} player={player} />
        ))}
      </ul>
    </div>
  );
}
