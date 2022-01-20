import { useState } from "react";
import DeclareButton from "./DeclareButton";
import DeclareModal from "./DeclareModal";

export default function Declare(props: any) {
  const myCards = props.myCards;
  const allCards = props.allCards;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const declare = props.declare;
  const handleClick = () => {
    setIsOpenModal(true);
  };
  const handleClose = () => {
    setIsOpenModal(false);
  };
  const handleSubmit = (selectedCards: any) => {
    console.log("submitted");
    console.log("selected: ", selectedCards);
		declare(selectedCards);
  };

  return (
    <>
      <DeclareButton onClick={handleClick} />
      <DeclareModal
        isOpenModal={isOpenModal}
        myCards={myCards}
        allCards={allCards}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
}
