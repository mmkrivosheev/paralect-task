import React from "react";
import {createArrayForPagination, slicePagesArray, addFirstAndLastPage} from "../../utils/pagination";
import ArrowLeft from "../UI/ArrowLeft/ArrowLeft";
import ArrowRight from "../UI/ArrowRight/ArrowRight";
import "./Pagination.scss";

const Pagination = ({item, totalPages, changePage}) => {
    const TOTAL_REPOS_FOR_PAGE = 4;
    const TOTAL_BUTTON = 3;
    const page = item || 1;
    const totalPageButton = Math.ceil(totalPages / TOTAL_REPOS_FOR_PAGE);
    const currentFirstReposOfPage = (page - 1) * TOTAL_REPOS_FOR_PAGE + 1;
    const currentLastReposOfPage = ((page - 1) * TOTAL_REPOS_FOR_PAGE + 4) < totalPages
        ? (page - 1) * TOTAL_REPOS_FOR_PAGE + 4
        : totalPages;
    const repos = currentLastReposOfPage - currentFirstReposOfPage
        ? `${currentFirstReposOfPage} - ${currentLastReposOfPage} of ${totalPages} items`
        : `${currentLastReposOfPage} of ${totalPages} items`;

    let pagesArray = createArrayForPagination(totalPageButton);
    pagesArray = slicePagesArray(pagesArray, page, totalPageButton, TOTAL_BUTTON);
    pagesArray = addFirstAndLastPage(pagesArray, page, totalPageButton);

    return (
        <div className="page__wrapper">
            <div className="page__items">{repos}</div>
            <div>
                <ArrowLeft
                    page={page}
                    fn={() => changePage(page - 1)}
                />
                {
                    pagesArray.map(item =>
                        typeof item === "number"
                        ? <span
                            key={item}
                            onClick={() => changePage(item)}
                            className={page === item ? "page page__current" : "page"}
                        >{item}</span>
                        : <span
                            key={Math.random()}
                            className="page__dots"
                        >{item}</span>
                    )
                }
                <ArrowRight
                    page={page}
                    totalPage={totalPageButton}
                    fn={() => changePage(page + 1)}
                />
            </div>
        </div>
    );
}

export default Pagination;