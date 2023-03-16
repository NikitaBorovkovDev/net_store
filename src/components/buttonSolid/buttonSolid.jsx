import "./buttonSolid.scss";

const ButtonSolid = (props) => {
    return (
        <button className="btn btn-solid">
            <span className="btn__text btn__text-solid">{props.children}</span>
        </button>
    );
};

export default ButtonSolid;
