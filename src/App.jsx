import React, {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Loader from "./components/UI/Loader/Loader";
import AppRouter from "./AppRouter";
import "./App.scss";

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

    return (
        <>
            <Header startSearch={startSearch} />
            {
                isLoading
                    ? <div className="app__loader">
                        <Loader />
                    </div>
                    : <AppRouter
                        userName={userName}
                        userData={userData}
                        reposFirstPage={reposFirstPage}
                        startSearch={startSearch}
                        error={error}
                    />
            }
        </>
    );
}

export default App;