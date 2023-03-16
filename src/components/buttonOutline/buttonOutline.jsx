import PropTypes from "prop-types";
import clsx from "clsx";

import "./buttonOutline.scss";

const ButtonOutline = (props) => {
    return (
        <button className={clsx("btn btn-outline ", props.addedClasses)}>
            <span className="btn__text btn__text-outline">
                {props.children}
            </span>
        </button>
    );
};
ButtonOutline.defaultProps = {
    children: "button",
    addedClasses: "",
};
ButtonOutline.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
};

export default ButtonOutline;
