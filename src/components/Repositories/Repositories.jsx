import React, {useState} from "react";
import Empty from "../Empty/Empty";
import ReposList from "../ReposList/ReposList";
import Pagination from "../Pagination/Pagination";
import repos_list_empty from "../../images/repos_list_empty.svg";
import "./Repositories.scss";

const Repositories = ({publicRepos, reposUrl, reposFirstPage}) => {
    const [page, setPage] = useState(null);

    const changePage = page => setPage(page);

    if (!publicRepos) return (
        <div className="repos-no-list__wrapper">
            <Empty src={repos_list_empty}>
                Repository list is empty
            </Empty>
        </div>
    );

    return (
        <div className="repositories">
            <h2 className="repositories__total">
                {publicRepos ? `Repositories (${publicRepos})` : null}
            </h2>
            <div className="repositories__repos-list">
                <ReposList
                    reposUrl={reposUrl}
                    page={page}
                    reposFirstPage={reposFirstPage}
                />
            </div>
            {
                publicRepos
                    ? <div className="repositories__pagination">
                    <Pagination
                    item={page}
                    totalPages={publicRepos}
                    changePage={changePage}
                    />
                    </div>
                    : null
            }
        </div>
    );
}

export default Repositories;