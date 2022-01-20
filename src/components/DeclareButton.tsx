export default function DeclareButton(props: any) {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="border-1 border-gray-200 border-opacity-70 bg-green-500 text-white rounded-sm py-1 px-2 hover:bg-green-700 cursor-pointer shadow-md transition-all"
      >
        Declare
      </button>
    </div>
  );
}
