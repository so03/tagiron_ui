import { useCallback, useContext, useState } from "react";
import CardMine from "../components/CardMine";
import Declare from "./Declare";
import Players from "./Players";
import { CurrentPlayerIdContext } from "../context";
import Questions from "./Questions";

export default function GameBoard(props: any) {
  const players = props.players;
  const cards = props.cards;
  const allCards = props.allCards;
  const questions = props.questions;
  const player = props.player;
  const actions = props.actions;

  const selectQuestion = actions.selectQuestion;
  const declare = actions.declare;

  const currentPlayerId = useContext(CurrentPlayerIdContext);

  const isMyTurn = useCallback(() => {
    return player.id === currentPlayerId;
  }, [player, currentPlayerId]);

  return (
    <>
      <Players players={players} player={player} />
      <Questions questions={questions} selectQuestion={selectQuestion} />
      <CardMine cards={cards} />
      <Declare myCards={cards} allCards={allCards} declare={declare} />
    </>
  );
}
