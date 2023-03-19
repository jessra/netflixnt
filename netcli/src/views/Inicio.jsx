import Filtros from '../components/Filtros';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { moviesList } from "../features/movies/moviesSlice";

export default function Inicio() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(moviesList())
	}, [])
	const movies = useSelector(state => state.movies)
	if (movies.movs) {
		return (
			<div>
				<Filtros />
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h3 className="text-2xl font-bold tracking-tight dark:text-white">Películas</h3>

					<div className="mt-6 grid grid-cols-1 items-start gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{movies.movs.map((pelicula) => (
							<div
								key={pelicula.id}
								className="group relative p-3 rounded-lg bg-white-bone dark:bg-black-medium"
							>
								<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
									<img
										src={`../src/peliculas/` + pelicula.img}
										alt={`Imagen película ` + pelicula.head}
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<p className="text-xl dark:text-white">
											<Link to={`/Movie/` + pelicula.id}>
												<span aria-hidden="true" className="absolute inset-0" />
												{pelicula.head}
											</Link>
										</p>
										<p className="mt-1 text-sm dark:text-muted">{pelicula.sipnosis}</p>
									</div>
									<p className="text-sm font-medium dark:text-muted">{pelicula.fecMov}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}