import React from "react";
import "./ReposItem.scss";

const ReposItem = ({name, htmlUrl, description}) => {
    return (
        <div className="repos-item__wrapper">
            <a className="repos-item__name" href={htmlUrl} target="_blank">{name}</a>
            <div className="repos-item__description">{description || "(no description)"}</div>
        </div>
    );
}

export default ReposItem;