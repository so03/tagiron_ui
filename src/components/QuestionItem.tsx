export default function QuestionItem(props: any) {
  const question = props.question;
  const handleSelect = (e: any) => {
    if (question.selectable) {
      props.onSelect(question);
    }
  };
  return (
    <div
      onClick={handleSelect}
      className={`
        ${question.selected && "bg-blue-400 text-white"}
				${
          question.selectable &&
          "hover:scale-105 hover:border-gray-500 cursor-pointer transform transition-transform duration-200"
        }
        border-2 rounded-2 shadow-md text-center`}
    >
      {question.text}
    </div>
  );
}
