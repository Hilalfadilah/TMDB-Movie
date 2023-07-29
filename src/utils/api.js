import axios from "axios";

export const searchMovie = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=a2127362ead2634e824bdf7cd0478223`);
    return search.data.results;
}