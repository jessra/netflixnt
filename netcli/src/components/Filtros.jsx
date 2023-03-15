export default function Filtros() {
	return (
		<>
			<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 mx-4 pt-4 sm:mx-auto sm:w-[30rem] lg:w-[50rem]">
				<p className="col-span-full ">Filtros de búsqueda</p>
				<div className="col-span-3 sm:col-span-4 lg:col-span-1">
					<label
						htmlFor="nombre"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						autoComplete="email"
						className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<div className="col-span-3 sm:col-span-2 lg:col-span-1">
					<label
						htmlFor="autor"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Autor
					</label>
					<input
						type="text"
						name="autor"
						id="autor"
						autoComplete="email"
						className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<div className="col-span-3 sm:col-span-2 lg:col-span-1">
					<label
						htmlFor="categoria"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Categoría
					</label>
					<select
						id="categoria"
						name="categoria"
						autoComplete="categoria-name"
						className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
