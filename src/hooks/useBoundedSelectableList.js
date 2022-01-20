import useSelectableList from "./useSelectableList";

export default function useBoundedSelectableList(collection, upperBound) {
    const { items, selectedItems, toggleSelected: toggleSelectedUnbounded } = useSelectableList(collection);

    const toggleSelected = (idx) => {
        if (!items[idx].selected && selectedItems.length >= upperBound) {
            return;
        }
        toggleSelectedUnbounded(idx);
    }

    return {
        items,
        selectedItems,
        toggleSelected,
    }
}