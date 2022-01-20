import { useState } from "react"

// Requirement: collection 's item must have a unique id.
export default function useCollection() {
    const [collection, setCollection] = useState([]);
    const add = (value) => {
        setCollection([...collection, value]);
    }
    const remove = (id) => {
        setCollection(collection.filter(item => item.id !== id));
    }

    return { collection, add, remove }
}