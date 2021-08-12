import { actionsTypes } from '../constants/animes'
import { getAnimeList } from '../api/api'

let data = fetch(getAnimeList().then((res) => {
    console.log(res);
    INITIAL_STATE.animes = res
}))

const INITIAL_STATE = {
    animes: data,
    animeCode: 0,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.GET_ANIME_LIST:
            return { ...state, animes: action.animes }

        case actionsTypes.SET_ANIME_CODE:
            return { ...state, animeCode: action.animeCode }

        case actionsTypes.GET_ANIME_DETAIL:
            return { ...state, }

        default:
            return state;
    }
}

export { reducers }