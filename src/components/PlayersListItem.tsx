import DeclareStatusBudge from "./DeclareStatusBadge";

export default function PlayersListItem(props: any) {
  const player = props.player;
  return (
    <li
      className={`
        ${player.retired ? "text-gray-300" : "text-black"}
        ${player.turned ? "text-blue-500" : ""}
    `}
    >
      {player.name} <DeclareStatusBudge declarationStatus={player.declarationStatus} />
    </li>
  );
}
