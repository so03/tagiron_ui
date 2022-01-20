import Card from "../components/Card";

export default function DeclareModalCardAllList(props: any) {
    const cards = props.cards;
    const toggleSelected = props.toggleSelected;
    const handleClick = (card: any, idx: number) => {
        if (card.disabled) {
            // TODO: alertはUX低い。特にyellow 5
            alert("You have this card.");
            return;
        }
        toggleSelected(idx);
    };

    const cardList = cards.map((card: any, idx: number) => {
        return (
            <div
                key={idx}
                onClick={(e) => handleClick(card, idx)}
                className={`
                    m-1
                    transform
                    hover:scale-110
                    cursor-pointer
                    ${card.selected ? 'scale-110' : 'scale-100' }
                `}
            >
                <Card card={card} />
            </div>
        );
    });
    return <div className="flex flex-wrap">{cardList}</div>;
}
