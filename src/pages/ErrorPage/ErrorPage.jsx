import React from "react";
import Header from "../../components/Header/Header";
import Empty from "../../components/Empty/Empty";

const ErrorPage = ({startSearch, error}) => {
    return (
        <>
            <Header startSearch={startSearch} />
            <Empty>
                Error: {error.message}
            </Empty>
        </>
    );
}

export default ErrorPage;