export default function BaseButton(props: any) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`
            py-1
            px-2
            ring-1
            text-white
            bg-indigo-500
            hover:bg-indigo-800
            ring-indigo-300
            rounded-md
            focus:outline-none
            transition-all
            `}
    >
      {props.text}
    </button>
  );
}
