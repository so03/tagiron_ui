import { useEffect } from "react";

export function useData() {
    const gameEventSource = new EventSource('/api/game')
    useEffect(() => {
        gameEventSource.onmessage = function (e) {
            console.log(e.data)
        }
        return gameEventSource.close();
    })

    return {
        // TODO:
        members: {},
    }
}
