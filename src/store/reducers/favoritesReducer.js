import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";
const initialState = {
    favorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id == action.payload.id).length === 0 ? [...state.favorites, action.payload] : state.favorites
            }

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload.id !== item.id))
            }

        default:
            return state;
    }
}

export default reducer;