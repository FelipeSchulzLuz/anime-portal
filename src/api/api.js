import axios from "axios";

export const getAnimeList = async () => {
    const options = {
        method: "GET",
        url: "https://jikan1.p.rapidapi.com/user/Nekomata1037/animelist/all",
        headers: {
            "x-rapidapi-key":
                "aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05",
            "x-rapidapi-host": "jikan1.p.rapidapi.com",
        },
    };
    try {
        const data = await axios.request(options);
        return data.data.anime;
    } catch (e) {
        console.log(e);
    }
}


export const getAnimeDetail = async (id) => {
    const options = {
        method: 'GET',
        url: `https://jikan1.p.rapidapi.com/anime/${id}/news`,
        headers: {
            'x-rapidapi-key': 'aabc1c15b8msh3e91db72b837037p1a1acdjsn5785d9abec05',
            'x-rapidapi-host': 'jikan1.p.rapidapi.com'
        }
    };
    try {
        const data = await axios.request(options);
        console.log("ONE", data);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}