import React from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/UI/Loader/Loader";
import  "./Loading.scss";

const Loading = ({startSearch}) => {
    return (
        <>
            <Header startSearch={startSearch} />
            <div className="app__loader">
                <Loader />
            </div>
        </>
    );
}

export default Loading;