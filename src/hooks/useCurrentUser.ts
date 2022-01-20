// 練習用・不使用
// hooksに置いたが、悩む余地あり？

import { useEffect, useState } from "react";

export function useCurrentUser() {
    const [id, setId] = useState<string|null>(null);
    useEffect(() => {
        let localSavedId = window.localStorage.getItem("id");
        if (localSavedId) {
            setId(localSavedId);
        }
    })
    const saveIdOnLocal = (newId: string) => {
        window.localStorage.setItem("id", newId);
        setId(newId);
    }

    return {
        id,
        saveIdOnLocal
    }
}