import { actionsTypes } from '../constants/animes'

const actions = {
    animeList: () => { return { type: actionsTypes.ANIME_LIST } },

    animeCode: () => { return { type: actionsTypes.ANIME_CODE } },

    animeDetail: () => { return { type: actionsTypes.ANIME_DETAIL } },
}

export { actions };