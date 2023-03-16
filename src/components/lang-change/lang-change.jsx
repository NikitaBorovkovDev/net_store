import {useEffect, useState} from "react";
import "./lang-change.scss";
const LangChange = (props) => {
    const [arrowDown, setArrowDown] = useState(true);
    let arrowDirectionClass = `arrow ${arrowDown ? "" : "lang-menu-open"}`;
    useEffect(() => {
        const onClick = (e) => {
            if (!e.target.closest(".lang-change-container")) {
                setArrowDown(true);
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);
    return (
        <a
            className="lang-change-container"
            onClick={() => setArrowDown(!arrowDown)}>
            <span className="lang-change-container__text small-regular">
                {props.children}
            </span>
            <span className={arrowDirectionClass}></span>
        </a>
    );
};

export default LangChange;
