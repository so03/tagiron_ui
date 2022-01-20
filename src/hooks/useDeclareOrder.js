import lazyPromise from "../mocks/lazyPromise";
import wrapPromise from "../mocks/wrapPromise";

function fetchDeclareOrder () {
    return lazyPromise([
        {
            "name": "saeki"
        },
        {
            "name": "sasaki"
        },
        {
            "name": "sawada"
        }
    ]);
}

export function useDeclareOrder () {
    const declareOrderReader = wrapPromise(fetchDeclareOrder());

    return {
        declareOrderReader,
    }
}