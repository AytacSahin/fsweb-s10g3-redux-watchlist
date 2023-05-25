import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../store/actions/favoritesActions";
import { addMovie } from "../store/actions/movieActions";

export default function FavMovie({ title, id }) {

  const favorites = useSelector(store => store.favoritesReducer.favorites)
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(addMovie(favorites.filter(item => item.id == id)[0]));
    dispatch(removeFavorite(favorites.filter(item => item.id == id)[0]));
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button onClick={removeHandler} className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100">
        Çıkar
      </button>
    </div>
  );
}
