import Filtros from '../components/Filtros'
import { useContext } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

export default function Example() {
	const { peli } = useContext(Contexto_Funciones);
	if (peli) {
		return (
			<div className="bg-white">
				<Filtros />
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h3 className="text-2xl font-bold tracking-tight  ">
						Películas
					</h3>
	
					<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{peli.map((pelicula) => (
							<div key={pelicula.id} className="group relative">
								<div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
									<img
										src={`../src/peliculas/` + pelicula.img}
										alt={`Imagen película ` + pelicula.head}
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm ">
											<a href='/ver'>
												<span aria-hidden="true" className="absolute inset-0" />
												{pelicula.head}
											</a>
										</h3>
										<p className="mt-1 text-sm ">{pelicula.sipnosis}</p>
									</div>
									<p className="text-sm font-medium  ">{pelicula.fecMov}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
