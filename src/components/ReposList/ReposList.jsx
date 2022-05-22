import React, {useEffect, useState} from "react";
import Loader from "../UI/Loader/Loader";
import ReposItem from "../ReposItem/ReposItem";
import "./ReposList.scss";

const ReposList = ({reposUrl, page, reposFirstPage}) => {
    const [reposList, setReposList] = useState(reposFirstPage);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        if (page) {
            try {
                if (error) setError(null);
                setIsLoading(true);
                const response = await fetch(reposUrl + `?per_page=4&page=${page}`);

                if (response.status === 200) {
                    const result = await response.json();
                    setReposList(result);

                } else setReposList(null);
            } catch(error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [page]);

    if (isLoading) return (
        <div className="repos-list__loader">
            <Loader />
        </div>
    );

    if (error) return (
        <p className="repos__error">
            Error: {error.message}
        </p>
    );

    return (
        <div>
            {
                reposList.map(item => {
                    return (
                        <ReposItem
                            key={item.id}
                            name={item.name}
                            htmlUrl={item["html_url"]}
                            description={item.description}
                        />
                    )
                })
            }
        </div>
    );
}

export default ReposList;