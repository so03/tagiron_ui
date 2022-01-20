import Card from "./Card";

export default function CardList(props: any) {
    const cards = props.cards;
    const cardList = cards.map((card: any, index: number) => <Card card={card} key={index} />);

    return (
        <div className="flex justify-around">
            {cardList}
        </div>
    );
}
