import { useState } from "react";
import QuestionList from "./QuestionList";
import QuestionSelectModal from "./QuestionSelectModal";

export default function Questions(props: any) {
  const questions = props.questions;
  const isMyTurn = props.isMyTurn;
  const [question, setQuestion]: [any, any] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const selectQuestion = props.selectQuestion;
  const handleSelect = (question: any) => {
    if (isMyTurn) {
      setQuestion(question);
      setIsOpenModal(true);
    }
  };
  const handleYes = () => {
    // 副作用
    selectQuestion(question.id);
    setIsOpenModal(false);
  };
  const handleNo = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {/* <p>Debug: {question ? question.text : ""}</p> */}
      <QuestionList questions={questions} onSelect={handleSelect} />
      <QuestionSelectModal
        isOpenModal={isOpenModal}
        question={question}
        handleYes={handleYes}
        handleNo={handleNo}
      />
    </>
  );
}
