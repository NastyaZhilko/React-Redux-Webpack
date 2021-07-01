import axios from "axios";
import {setIsFetchError, setIsFetching, setRepos} from "../../reducers/reposReducer";

//get запрос на получение репозиториев
export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if (searchQuery == '') {
        searchQuery = "stars:%3E1"
    }
    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const response = await axios
                .get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page${perPage}&page${currentPage}`)
            dispatch(setRepos(response.data))
        } catch (e) {
            dispatch(setIsFetchError(true))
            dispatch(setIsFetching(false))
            setTimeout(() => {
                dispatch(setIsFetchError(false))
            }, 3000)
        }

    }
}

//get запрос на получение одного репозитория
export const getCurrentRepo = async (username, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    setRepo(response.data)
}

//get запрос на получение 10 самых активных контрибьютеров
export const getContributors = async (username, repoName, setContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`)
    setContributors(response.data)
}