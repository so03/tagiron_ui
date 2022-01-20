import Room from "./Room";
import Declare from "./Declare";
import Questions from "./Questions";
import GameBoard from "./GameBoard";

export default GameBoardDemo;

// Game
function GameBoardDemo() {
  return (
    <GameBoard />
  )
}

// Room
function RoomDemo() {
  const userInfo = { id: 1, name: 'sasaki' };
  const members = [
      {
        name: "sasaki",
      },
      {
        name: "sawada",
      },
    ];
  return (
    <Room userInfo={userInfo} members={members} reload={() => {}} startGame={() => {}}/>
  )
}

// DeclareForm
function DeclareFormDemo() {
  const myCards = [
    {
      id: 2,
      number: 1,
      color: "Red",
    },
    {
      id: 13,
      number: 2,
      color: "Blue",
    },
    {
      id: 4,
      number: 3,
      color: "Red",
    },
    {
      id: 6,
      number: 5,
      color: "Yellow",
    },
  ];

  const allCards = [
    {
      id: 1,
      number: 0,
      color: "Red",
    },
    {
      id: 2,
      number: 1,
      color: "Red",
    },
    {
      id: 3,
      number: 2,
      color: "Red",
    },
    {
      id: 4,
      number: 3,
      color: "Red",
    },
    {
      id: 5,
      number: 4,
      color: "Red",
    },
    {
      id: 6,
      number: 5,
      color: "Yellow",
    },
    {
      id: 7,
      number: 6,
      color: "Red",
    },
    {
      id: 8,
      number: 7,
      color: "Red",
    },
    {
      id: 9,
      number: 8,
      color: "Red",
    },
    {
      id: 10,
      number: 9,
      color: "Red",
    },
    {
      id: 11,
      number: 0,
      color: "Blue",
    },
    {
      id: 12,
      number: 1,
      color: "Blue",
    },
    {
      id: 13,
      number: 2,
      color: "Blue",
    },
    {
      id: 14,
      number: 3,
      color: "Blue",
    },
    {
      id: 15,
      number: 4,
      color: "Blue",
    },
    {
      id: 16,
      number: 5,
      color: "Yellow",
    },
    {
      id: 17,
      number: 6,
      color: "Blue",
    },
    {
      id: 18,
      number: 7,
      color: "Blue",
    },
    {
      id: 19,
      number: 8,
      color: "Blue",
    },
    {
      id: 20,
      number: 9,
      color: "Blue",
    },
  ];

  return (
    <div className="font-extralight">
      <Declare myCards={myCards} allCards={allCards} />
    </div>
  )
}


// Questions
function QuestionsDemo() {
  const questions = [
    {
      id: 1,
      text: "hoge",
      selected: false,
      selectable: true,
    },
    {
      id: 2,
      text: "fuga",
      selected: true,
      selectable: false,
    },
  ];
  const isMyTurn = true;
  return (
    <div className="font-extralight">
      <Questions questions={questions} isMyTurn={isMyTurn} />
    </div>
  );
}
