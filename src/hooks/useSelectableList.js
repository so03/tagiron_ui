import { useState } from "react";

export default function useSelectableList(collection) {
    const selectable = collection.map(el => ({ ...el, selected: false }));
    const [items, setItems] = useState(selectable);
    const toggleSelected = (idx) => {
        setItems(items.map((item, i) => {
            if (i === idx) {
                item.selected = !item.selected;
            }
            return item;
        }))
    }
    const selectedItems = items.filter(item => item.selected).map(item => {
        const { selected, ...el } = item;
        console.log("el: ", el)
        return el;
     });

    return { items, selectedItems, toggleSelected }
}