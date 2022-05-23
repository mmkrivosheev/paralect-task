import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NoUserPage from "./pages/NoUserPage/NoUserPage";
import UserPage from "./pages/UserPage/UserPage";

const AppRouter = ({userName, userData, reposFirstPage, error}) => {

    if (!userName) return <HomePage />

    if (error) return <ErrorPage error={error} />

    if (userName && !userData) return <NoUserPage />

    return <UserPage userData={userData} reposFirstPage={reposFirstPage} />
}

export default AppRouter;