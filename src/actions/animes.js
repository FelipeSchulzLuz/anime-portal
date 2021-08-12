import { actionsTypes } from '../constants/animes'

const actions = {
    getAnimeList: () => ({
        type: actionsTypes.GET_ANIME_LIST,
    }),

    setAnimeCode: () => ({
        type: actionsTypes.SET_ANIME_CODE,
    }),

    getAnimeDetail: () => ({
        type: actionsTypes.GET_ANIME_DETAIL,
    })
}

export { actions };