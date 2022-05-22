import React, {useEffect, useState} from "react";
import Loading from "./pages/Loading/Loading";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NoUserPage from "./pages/NoUserPage/NoUserPage";
import UserPage from "./pages/UserPage/UserPage";

const App = () => {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState(null);
    const [reposFirstPage, setReposFirstPage] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const startSearch = userName => setUserName(userName);

    useEffect(async () => {
        if (userName) {
            try {
                if (error) setError(null);
                setIsLoading(true);
                const responseUser = await fetch(`https://api.github.com/users/${userName}`);

                if (responseUser.status === 200) {
                    const resultUser = await responseUser.json();
                    const responseRepos = await fetch(resultUser["repos_url"] + `?per_page=4&page=1`);
                    const resultRepos = await responseRepos.json();
                    setUserData(resultUser);
                    resultRepos.isFirstPage = true;
                    setReposFirstPage(resultRepos);

                } else setUserData(null);
            } catch(error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [userName]);

    if (isLoading) return <Loading />

    if (!userName) return <HomePage startSearch={startSearch} />

    if (error) return <ErrorPage startSearch={startSearch} error={error} />

    if (userName && !userData) return <NoUserPage startSearch={startSearch} />

    if (userData) return (
        <UserPage
            startSearch={startSearch}
            userData={userData}
            reposFirstPage={reposFirstPage}
        />
    );
}

export default App;