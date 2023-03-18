export default function Filtros() {
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
						autoComplete="email"
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
						htmlFor="autor"
						className="block text-md font-medium leading-6 dark:text-white"
					>
						Autor
					</label>
					<input
						type="text"
						name="autor"
						id="autor"
						autoComplete="email"
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
						className="
							block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
							focus-visible:outline-0 sm:text-md sm:leading-6 bg-stone-light dark:bg-black-medium dark:text-white ring-2 ring-transparent
							focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
							hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
						"
					>
						<option>United States</option>
						<option>Canada</option>
						<option>Mexico</option>
					</select>
				</div>
			</div>
		</>
	);
}
