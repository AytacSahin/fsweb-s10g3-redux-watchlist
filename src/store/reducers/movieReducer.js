import { ADD_MOVIE, BACK_TO_FIRST, NEXT_MOVIE, PREVIOUS_MOVIE, DELETE_MOVIE } from "../actions/movieActions"
import { movies } from "../../movies"


const initialState = {
    movies: movies,
    siraNo: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload],
            }

        case BACK_TO_FIRST:
            return {
                ...state,
                siraNo: 0
            }

        case NEXT_MOVIE:
            return {
                ...state,
                // son filmden sonra hata vermemesi için bu kodu yazdım:
                siraNo: state.siraNo === (state.movies.length - 1) ? state.siraNo : (state.siraNo + action.payload)
            }

        case PREVIOUS_MOVIE:
            return {
                ...state,
                siraNo: state.siraNo === 0 ? state.siraNo : (state.siraNo - action.payload)
            }

        case DELETE_MOVIE:

            return {
                ...state,
                movies: state.movies.filter(item => ((action.payload.id) !== (item.id))), 
                siraNo: (state.movies.length - 1) === state.siraNo ? 0 : state.siraNo
            }

        default:
            return state;
    }
}

export default reducer;