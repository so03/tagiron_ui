export default function PlayersTurnText(props: any) {
  const playerCurrentTurn = props.playerCurrentTurn;
  return <div>{playerCurrentTurn.name}'s turn now</div>;
}
