import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const combines = combineReducers({
    movieReducer,
    favoritesReducer
})

export default combines;