import React from "react";
import "./ArrowRight.scss";

const ArrowRight = ({page, totalPage, fn}) => {
    return (
        <svg
            onClick={page === totalPage ? null : fn}
            className={page === totalPage
                ? "arrow-right arrow-right--disabled"
                : "arrow-right"}
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L6 6L1 11"/>
        </svg>
    );
}

export default ArrowRight;