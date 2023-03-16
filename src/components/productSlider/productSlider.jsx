import {useEffect, useState} from "react";
import Swiper, {Pagination} from "swiper";
import fetchProducts, {allProducts} from "../../services/fetchProducts.js";
import ProductCard, {smallCard} from "../productCard/productCard.jsx";

import "swiper/css";
import "./productSlider.scss";

const ProductSlider = () => {
    const [slides, setSlides] = useState(null);
    // const lazyImage = () => (
    //     <LazyLoadImage
    //         alt={image.alt}
    //         height={image.height}
    //         src={image.src} // use normal <img> attributes as props
    //         width={image.width} />
    // )

    const loadingProductSlide = async () => {
        let products = await fetchProducts(
            "https://raw.githubusercontent.com/nickfluffybr/net_store/master/product.json",
            36,
            allProducts()
        );
        products = products.map((product, index) => {
            return (
                <div className="swiper-slide" key={index}>
                    {ProductCard(product, smallCard())}
                </div>
            );
        });
        setSlides(products);
    };

    useEffect(() => {
        // eslint-disable-next-line
        const swiper = new Swiper(".product-slider .swiper", {
            modules: [Pagination],
            spaceBetween: 30,
            simulateTouch: false,
            slidesPerGroup: 6,
            slidesPerView: 6,
            pagination: {
                el: ".product-slider .swiper-pagination",
                clickable: true,
            },
        });
        loadingProductSlide();
    }, []);

    let content = slides ? slides : null;
    return (
        <div className="product-slider">
            <div className="swiper">
                <div className="swiper-wrapper">{content}</div>

                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default ProductSlider;
