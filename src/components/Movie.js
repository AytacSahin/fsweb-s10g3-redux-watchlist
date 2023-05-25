import { useSelector } from "react-redux";

export default function Movie() {
  const movies = useSelector(store => store.movieReducer.movies)
  const siraNo = useSelector(store => store.movieReducer.siraNo)
  const anlikGosterim = movies[siraNo]

  return (
    <div className="flex bg-white shadow-lg items-start">
      <img src={anlikGosterim.posterUrl} alt={anlikGosterim.title} className="max-w-[18rem] w-2/5 block" />
      <div className="p-8 flex flex-col gap-4 text-sm">
        <div>
          <h2 className="text-2xl">{anlikGosterim.title}</h2>
          <p className="italic text-sm">{anlikGosterim.genres.join(', ')}</p>
        </div>
        <p className="">{anlikGosterim.plot}</p>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">Yönetmen</span>
          <span className="flex-1">{anlikGosterim.director}</span>
        </div>
        <div className="flex flex-col sm:flex-row">
          <span className="w-1/3 font-bold">Oyuncular</span>
          <span className="flex-1">{anlikGosterim.actors}</span>
        </div>
        <div className="flex text-sm gap-1 justify-end">
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{anlikGosterim.year}</span>
          <span className="block px-2 py-1 rounded-md border border-zinc-400">{anlikGosterim.runtime}dk</span>
        </div>
      </div>
    </div>
  )
};