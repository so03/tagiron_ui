import DeclareModalCardAllList from "./DeclareModalCardAllList";
import CardList from "../components/CardList";
import useCardSelection from "../hooks/useCardSelection";

const CARD_COUNT = 4;

export default function DeclareModal(props: any) {
  const myCards = props.myCards;
  const allCards = props.allCards;
  const isOpenModal = props.isOpenModal;
  const { cards, selectedCards, toggleSelected } = useCardSelection(allCards, myCards, CARD_COUNT);
  const handleClose = () => {
    props.onClose();
  };
  const handleSubmit = () => {
    props.onSubmit(selectedCards);
  };
  if (!isOpenModal) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-30 h-screen w-screen">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="p-4 rounded-md bg-white max-w-md grid gap-2">
          <p className="text-center">Select 4 Cards</p>
          <DeclareModalCardAllList cards={cards} toggleSelected={toggleSelected} />
          <CardList cards={selectedCards} />
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="px-2 py-1 rounded-sm bg-green-500 text-white hover:bg-green-700 shadow-md ring-2 ring-green-600 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="mt-2">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
