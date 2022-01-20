import { Suspense } from "react";
import { useData, actions } from "../mocks/mocks";
import GameBoard from "../components/GameBoard";

export default function GameEntry() {
  const { cards, allCards, player, players, questions } = useData();

  return (
    <div className="font-extralight grid gap-4 m-4">
      <Suspense fallback={<p>Loading...</p>}>
        <GameReader
          cards={cards}
          questions={questions}
          players={players}
          player={player}
          allCards={allCards}
        />
      </Suspense>
    </div>
  );
}

function GameReader(props: any) {
  const cards = props.cards.read();
  const allCards = props.allCards.read();
  const questions = props.questions.read();
  const players = props.players.read();
  const player = props.player.read();
  return (
    <GameBoard
      cards={cards}
      questions={questions}
      players={players}
      player={player}
      allCards={allCards}
      actions={actions}
    />
  );
}
