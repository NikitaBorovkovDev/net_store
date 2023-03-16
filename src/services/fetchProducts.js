import generateUniqueRandomNumbers from "./generateUniqueRandomNumbers";

export const allProducts = () => "all";
export const withoutDiscount = () => "withoutDiscount";
export const withDiscount = () => "withDiscount";

const fetchProducts = async (url, quantity = 1, filter = "all") => {
    filter = filter.toLocaleLowerCase();
    if (
        !(
            filter !== "all" ||
            filter !== "withoutDiscount" ||
            filter !== "withDiscount"
        )
    ) {
        console.warn(
            `fetchProducts wrong argument. filter should be equal to: 'all' - default value/'withoutDiscount'/'withDiscount') \n filter=${filter}`
        );
        filter = "all";
    }
    try {
        let response = await fetch(url);
        response = await response.json();
        if (filter !== "all") {
            if (filter === "withDiscount") {
                response = response.filter((item) => {
                    if (
                        item.discount !== "0" &&
                        item.discount !== 0 &&
                        item.discount
                    ) {
                        return item;
                    }
                    return false;
                });
            }
            if (filter === "withoutDiscount") {
                response = response.filter((item) => {
                    if (
                        item.discount === 0 ||
                        item.discount === "0" ||
                        !item.discount
                    ) {
                        return item;
                    }
                    return false;
                });
            }
        }

        const productsArr = generateUniqueRandomNumbers(
            quantity,
            response.length - 1
        ).map((i) => {
            return response[i];
        });
        return productsArr;
    } catch (error) {
        console.error("fetch error", error);
    }
};

export default fetchProducts;
