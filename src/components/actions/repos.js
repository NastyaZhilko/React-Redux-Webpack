import axios from "axios";
import {setRepos} from "../../reducers/reposReducer";

export const getRepos = (searchQuery) => {
    return async (dispatch) => {
        const  response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    dispatch(setRepos(response.data))
    }

}