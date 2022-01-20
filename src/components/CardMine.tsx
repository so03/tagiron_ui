import CardList from "./CardList";

export default function CardMine(props: any) {
    const cards = props.cards;
    return (
        <div>
            <h3 className="text-center m-2">Your Cards</h3>
            <CardList cards={cards} />
        </div>
    );
}
