export const createArrayForPagination = totalPage => {
    const pagesArray = [];

    for (let i= 0; i < totalPage; i++)
        pagesArray.push(i + 1);

    return pagesArray;
};

export const slicePagesArray = (array, page, totalPages, totalButtons) => {
    if (array.length < totalButtons)
        return array;

    if (page <= (totalButtons - 1))
        return array.slice(0, 3);

    if (page === (totalPages- 1))
        return array.slice(page - totalButtons, page);

    if (page === totalPages)
        return array.slice(page - (totalButtons + 1), page - 1);

    return array.slice(page - 2, page + 1);
};

export const addFirstAndLastPage = (array, page, totalPages) => {
    const newArray = [...array];

    if ((page - 1) > 2)
        newArray.unshift("...");

    if (totalPages - page > 2)
        newArray.push("...");

    if (page > 2)
        newArray.unshift(1);

    if (totalPages > 3)
        newArray.push(totalPages);

    return newArray;
}