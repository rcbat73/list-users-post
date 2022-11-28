import axios from "axios";
import { dataMapper } from "../utils/utils";

export const fetchRepos = (pageToFetch = 1, login) => {    
    return axios.get(
      `${process.env.REACT_APP_USER_URL}/${login}/repos?per_page=${process.env.REACT_APP_REPOS_PER_PAGE}&page=${pageToFetch}`
      ).then((response) => response.data);
};

export const fetchUser = (query) => axios.get(`${process.env.REACT_APP_USER_URL}/${query}`)
  .then(response => dataMapper(response.data));