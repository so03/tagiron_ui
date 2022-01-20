import { useEffect } from "react";

export function usePolling(callbacks, duration = 5000) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("hello, timeout")
            callbacks.forEach(callback => {
               callback();
            });
        }, duration);
        return () => clearTimeout(timeout);
    })
}
