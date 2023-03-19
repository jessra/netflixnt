import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generoList } from "../features/movies/generosSlice";
import { ordenarDatosPeli, moviesList } from "../features/movies/moviesSlice";
import http from "../http-common"

export default function Filtros() {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [gen, setGen] = useState('')
	useEffect(() => {
		dispatch(generoList())
	}, [])
	const generos = useSelector(state => state.genero)
	const filtroGen = (e) => {
		setGen(e.target.value)
		filtrar(e.target.value, name)
	}
	const filtroName = (e) => {
		setName(e.target.value)
		filtrar(gen, e.target.value)
	}
	function filtrar(gen, name) {
		if (!gen && !name) {
			dispatch(moviesList())
		} else {
			http
			.post(`/filtrar`, {gen: gen, name: name})
			.then(response => {
				dispatch(ordenarDatosPeli(response.data))
			})
			.catch(e => {
				console.log(e)
			})
		}
	}
	return (
		<>
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 mx-4 pt-4 sm:mx-auto sm:w-[30rem] lg:w-[50rem]">
				<p className="col-span-full dark:text-white">Filtros de búsqueda</p>
				<div className="col-span-3 sm:col-span-4 lg:col-span-1">
					<label
						htmlFor="nombre"
						className="block text-md font-medium leading-6 dark:text-white"
					>
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						value={name}
						onChange={filtroName}
						className="
							block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
							focus-visible:outline-0 sm:text-md sm:leading-6 bg-stone-light dark:bg-black-medium dark:text-white ring-2 ring-transparent
							focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
							hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
						"
					/>
				</div>
				<div className="col-span-3 sm:col-span-2 lg:col-span-1">
					<label
						htmlFor="categoria"
						className="block text-md font-medium leading-6 dark:text-white"
					>
						Categoría
					</label>
					<select
						id="categoria"
						name="categoria"
						autoComplete="categoria-name"
						value={gen}
						onChange={filtroGen}
						className="
							block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
							focus-visible:outline-0 sm:text-md sm:leading-6 bg-stone-light dark:bg-black-medium dark:text-white ring-2 ring-transparent
							focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
							hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
						"
					>
						{generos.gen.map((gen) => (
							<option key={gen.idGe} value={gen.idGe}>{gen.nameGe}</option>
							))}
							<option key='vacio' value="">Desmarcar</option>
					</select>
				</div>
			</div>
		</>
	);
}