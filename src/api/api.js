import axios from "axios";

const optionsGetList = {
    method: "GET",
    url: "/user/Nekomata1037/animelist/all",
    headers: {
        "x-rapidapi-key":
            "aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
    },
};
// export const getAnimeList = async () => {
//     try {
//         const animeList = await axios(optionsGetList);
//         console.log(animeList.data.anime)
//         return animeList.data.anime;
//     } catch (e) {
//         console.log(e);
//     }
// }


// const optionsGetDetail = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05',
//         'x-rapidapi-host': 'jikan1.p.rapidapi.com'
//     }    
// };    

const getApi = axios.create({
    baseURL: "https://jikan1.p.rapidapi.com/user/Nekomata1037",
})    


export const getAnimeList = async (id) => {
    try {
        const resultGetAnimeList = await getApi(`/animelist/all`, optionsGetList).then(res => res.data.anime);
        // const data = await axios.request(...optionsGetOne, url);
        // console.log("getAnimeList", resultGetAnimeList);
        return resultGetAnimeList;
    } catch (e) {
        console.log(e);
    }
}

// export const getAnimeDetail = async (id) => {
//     const url = { url: `https://jikan1.p.rapidapi.com/anime/${id}/news` }
//     try {
//         const data = await axios.request(...optionsGetOne, url);
//         console.log("ONE", data);
//         return data.data;
//     } catch (e) {
//         console.log(e);
//     }
//
