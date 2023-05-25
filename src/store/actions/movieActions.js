export const ADD_MOVIE = "ADD_MOVIE";
export const BACK_TO_FIRST = "BACK_TO_FIRST";
export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";


export const addMovie = (favmovie) => {
    return ({ type: ADD_MOVIE, payload: favmovie });
}

export const backToFirst = () => {
    return ({ type: BACK_TO_FIRST });
}

export const nextMovie = (x) => {
    return ({ type: NEXT_MOVIE, payload: x });
}

export const previousMovie = (x) => {
    return ({ type: PREVIOUS_MOVIE, payload: x });
}

export const deleteMovie = (movie) => {
    return ({ type: DELETE_MOVIE, payload: movie });
}
