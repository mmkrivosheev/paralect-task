import React from "react";
import Header from "../../components/Header/Header";
import Empty from "../../components/Empty/Empty";
import empty from "../../images/empty.svg";

const NoUserPage = ({startSearch}) => {
    return (
        <>
            <Header startSearch={startSearch} />
            <Empty src={empty}>
                User not found
            </Empty>
        </>
    );
}

export default NoUserPage;