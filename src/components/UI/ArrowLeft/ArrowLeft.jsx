import React from "react";
import "./ArrowLeft.scss";

const ArrowLeft = ({page, fn}) => {
    return (
        <svg
            onClick={page === 1 ? null : fn}
            className={page === 1
                ? "arrow-left arrow-left--disabled"
                : "arrow-left"}
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3.41412 6.00008L7.70701 1.70718L6.2928 0.292969L0.585693 6.00008L6.2928 11.7072L7.70701 10.293L3.41412 6.00008Z"/>
        </svg>
    );
}

export default ArrowLeft;