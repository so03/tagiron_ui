export default function Card(props: any) {
    const card = props.card
    return (
        <div
            className={`
            border-2
            p-2
            text-white
            ${"bg-" + colorClass(card) + "-300"}
        `}
        >
            {card.number}
        </div>
    );
}

function colorClass(card: any) {
    let colorClass = null;
    if (card.color === "Red") {
        colorClass = "red";
    } else if (card.color === "Blue") {
        colorClass = "blue";
    } else if (card.color === "Yellow") {
        colorClass = "yellow";
    }
    return colorClass;
}
