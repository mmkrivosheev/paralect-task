import React from "react";
import Input from "../UI/Input/Input";
import logo from "../../images/logo.svg";
import "./Header.scss";

const Header = props => {
    return (
        <header className="header">
            <img
                className="header__logo"
                src={logo}
                alt="logo"
            />
            <Input {...props} />
        </header>
    );
};

export default Header;