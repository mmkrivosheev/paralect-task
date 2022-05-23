import React from "react";
import Empty from "../../components/Empty/Empty";
import search from "../../images/search.svg";

const HomePage = () => {
    return (
        <Empty src={search}>
            Start with searching<br/>a GitHub user
        </Empty>
    );
}

export default HomePage;