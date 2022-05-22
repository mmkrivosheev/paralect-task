import React, {useState} from "react";
import "./Input.scss";

const Input = ({startSearch}) => {
    const [userName, setUserName] = useState("");

    const submit = e => {
        e.preventDefault();
        startSearch(userName);
    };

    return (
        <form className="input__wrapper" onSubmit={submit}>
            <input
                className="input__search"
                placeholder="Enter GitHub username"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
        </form>
    );
};

export default Input;