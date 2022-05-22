import React from "react";
import Header from "../../components/Header/Header";
import Empty from "../../components/Empty/Empty";
import search from "../../images/search.svg";

const HomePage = ({startSearch}) => {
    return (
        <>
            <Header startSearch={startSearch} />
            <Empty src={search}>
                Start with searching<br/>a GitHub user
            </Empty>
        </>
    );
}

export default HomePage;