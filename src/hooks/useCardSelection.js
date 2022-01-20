import useBoundedSelectableList from './useBoundedSelectableList';

export default function useCardSelection(allCards, myCards, UpperBoundOfSelectCount) {
    const { items: cards, selectedItems: selectedCards, toggleSelected } = useBoundedSelectableList(allCards, UpperBoundOfSelectCount);

    const modifiedCards = cards.map(card => {
        Object.defineProperty(card, 'disabled', {
            writable: false,
            value: hasCard(card, myCards)
        });
        return card
    });

    return {
        cards: modifiedCards,
        selectedCards,
        toggleSelected
    }
}

function hasCard(needle, haystack) {
    return haystack.filter(card => card.id === needle.id).length > 0;
}