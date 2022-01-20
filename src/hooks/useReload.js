import { useState } from "react";
import wrapPromise from "../mocks/wrapPromise";

// Wrap promise of response with Object to use Suspense.
// And add reload method.
export function useReload(fetcher) {
    const promise = wrapPromise(fetcher());

    const [data, setData] = useState(promise);

    const reload = () => {
        console.log("Reloading now...");
        fetcher().then(
            (r) => setData({ read: () => r }),
            (e) => {
                //
            }
        )
    }

    return {
        data,
        reload
    };
}
