export default function QuestionSelectModal(props: any) {
  const isOpenModal = props.isOpenModal;
  const question = props.question;
  const handleYes = props.handleYes;
  const handleNo = props.handleNo;
  if (!isOpenModal) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-200 bg-opacity-50">
      <div className="h-screen flex justify-center items-center">
        <div className="font-extralight grid gap-2">
          <h3 className="text-center">Select this card?</h3>
          <p className="text-center">{question.text}</p>
          <div>
            <div className="grid gap-2 justify-items-center">
              <button
                onClick={handleYes}
                className="py-1 px-2 w-20 border-1 border-blue-500 border-opacity-70  rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition-all"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="py-1 px-2 w-20 border-1 border-blue-500 border-opacity-70  rounded-md shadow-sm hover:bg-blue-600 hover:text-white transition-all"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
