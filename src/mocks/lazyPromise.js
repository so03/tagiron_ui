export default function lazyPromise(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("fetching completed", data);
            resolve(data)
        }, 1000)
    })
}