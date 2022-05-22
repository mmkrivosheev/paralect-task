import React from "react";
import "./Empty.scss";

const Empty = ({src, children}) => {
    return (
        <div className="empty__wrapper">
            {src ? <img className="empty__icon" src={src} alt="icon"/> : null}
            <p className="empty__text">{children}</p>
        </div>
    );
};

export default Empty;