import React from "react";
import Header from "../../components/Header/Header";
import UserData from "../../components/UserData/UserData";

const NoUserPage = ({startSearch, userData, reposFirstPage}) => {
    return (
        <>
            <Header startSearch={startSearch} />
            <UserData
                userData={userData}
                reposFirstPage={reposFirstPage}
            />
        </>
    );
}

export default NoUserPage;