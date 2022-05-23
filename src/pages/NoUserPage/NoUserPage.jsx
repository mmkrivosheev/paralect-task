import React from "react";
import Empty from "../../components/Empty/Empty";
import empty from "../../images/empty.svg";

const NoUserPage = () => {
    return (
        <Empty src={empty}>
            User not found
        </Empty>
    );
}

export default NoUserPage;