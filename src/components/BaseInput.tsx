export default function BaseInput(props: any) {
    return (
        <input
            {...props}
            className={`
                p-2
                shadow-md
                rounded-lg
                w-full
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                border
                border-transparent
                text-gray-700
                placeholder-gray-400
                bg-white
            `}
        ></input>
    );
}
