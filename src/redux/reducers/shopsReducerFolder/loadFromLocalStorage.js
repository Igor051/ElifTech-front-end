export function loadFromLocalStorageShopsPage() {
    try {
        const serialisedState = localStorage.getItem("activeShopId");
        if(serialisedState === null){
            return undefined
        }
        return JSON.parse(serialisedState);
    }catch (e) {
        console.warn(e.message);
        return undefined
    }
}