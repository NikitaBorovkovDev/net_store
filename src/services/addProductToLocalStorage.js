export default function addProductToLocalStorage(key, productId, productProps) {
    let localStorageData = localStorage.getItem(key);
    let newLocalStorageData = [];
    if (localStorageData) {
        newLocalStorageData = JSON.parse(localStorageData);
        let thisProductInLocalStorageData = newLocalStorageData.find((obj) => obj.hasOwnProperty("id") && obj.id === productId);
        if (thisProductInLocalStorageData) {
            newLocalStorageData = newLocalStorageData.filter((item) => item.id !== thisProductInLocalStorageData.id);
        }
        else {
            newLocalStorageData.push({ id: productId, ...productProps });
        }
    }
    else {
        newLocalStorageData = [
            {
                id: productId,
                ...productProps,
            },
        ];
    }
    localStorage.setItem(key, JSON.stringify(newLocalStorageData));
}
