import "./login.scss";

const Login = (props) => {
    return (
        <a className="login small-regular">
            <span className="login__text">{props.children}</span>
        </a>
    );
};

export default Login;
