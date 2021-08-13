import { actionsTypes } from '../constants/animes'

const INITIAL_STATE = {
    anime: [],
    animeCode: 0,
    animeSelected: {}
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ANIME_LIST:
            return { ...state, anime: action.anime }

        case actionsTypes.ANIME_CODE:
            return { ...state, animeCode: action.animeCode }

        case actionsTypes.ANIME_DETAIL:
            return { ...state, animeSelected: action.animeSelected }

        default:
            return state;
    }
}

export { reducers }