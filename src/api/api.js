import axios from "axios";

const getApi = axios.create({
    baseURL: "https://jikan1.p.rapidapi.com/user/Nekomata1037"
})
const getDetail = axios.create({
    baseURL: "https://jikan1.p.rapidapi.com",
})

export const getAnimeList = async () => {
    try {
        const resultGetAnimeList = await getApi(`/animelist/all`, optionsGetList).then(res => res.data.anime);
        return resultGetAnimeList;
    } catch (e) {
        console.log(e);
    }
};

export const getAnimeDetail = async (id) => {
    try {
        const result = await getDetail(`/anime/31646/news`, optionsGetDetail).then(res => res.data);
        return result.data;
    } catch (e) {
        console.log(e);
    }
};

const optionsGetDetail = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05',
        'x-rapidapi-host': 'jikan1.p.rapidapi.com'
    },
};

const optionsGetList = {
    method: "GET",
    url: "/user/Nekomata1037/animelist/all",
    headers: {
        "x-rapidapi-key":
            "aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
    },
};