import React from "react";
import Empty from "../../components/Empty/Empty";

const ErrorPage = ({error}) => {
    return (
        <Empty>
            Error: {error.message}
        </Empty>
    );
}

export default ErrorPage;