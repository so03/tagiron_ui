import QuestionItem from "../components/QuestionItem";

export default function QuestionList(props: any) {
  const questions = props.questions;
  const handleSelect = (question: any) => {
    props.onSelect(question);
  };
  return (
    <div className="container mx-auto grid gap-2">
      {questions.map((question: any) => {
        return (
          <QuestionItem
            key={question.id}
            question={question}
            onSelect={handleSelect}
          />
        );
      })}
    </div>
  );
}
