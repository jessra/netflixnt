import { Disclosure, Dialog, Transition, Menu } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Contexto_Funciones } from "../context/contextoFunciones";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
	const { registrarPelicula, activo, cerrarSesion } = useContext(Contexto_Funciones);
	const [isOpenModal, setisOpenModal] = useState(false);
	const [head, setHead] = useState('');
	const [di, setDi] = useState('');
	const [fran, setFran] = useState('');
	const [gen, setGen] = useState('');
	const [fecMov, setFecMov] = useState('');
	const [sip, setSip] = useState('');
	const [img, setImg] = useState({preview: '', data: ''});
	const [tra, setTra] = useState('');
  const cambioImg = (e) => {
    const img2 = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImg(img2)
  }
	function Modal() {
		setisOpenModal(!isOpenModal);
	}
	const location = useLocation();
	return (
		<>
			<Disclosure
				as="nav"
				className="sticky w-full top-0 bg-zinc-900 bg-white z-50 manrope border-b-2 border-stone"
			>
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2   hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex flex-shrink-0 items-center">
										<img
											className="block h-8 w-auto lg:hidden"
											src="/Logo.png"
											alt="netflixn´t"
										/>
										<img
											className="hidden h-8 w-auto lg:block"
											src="/Logo.png"
											alt="netflixn´t"
										/>
									</div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											<Link
												to="/"
												className={classNames(
													location.pathname == "/" && !isOpenModal
														? "bg-primario text-white"
														: "  hover:bg-gray-700 hover:text-primario",
													"rounded-md px-3 py-2 text-sm font-bold tracking-widest"
												)}
											>
												Inicio
											</Link>
											<Link
												to="/Perfil"
												className={classNames(
													location.pathname == "/Perfil" && !isOpenModal
														? "bg-primario text-white"
														: "  hover:bg-gray-700 hover:text-primario",
													"rounded-md px-3 py-2 text-sm font-bold tracking-widest"
												)}
											>
												Perfil
											</Link>
											<button
												type="button"
												onClick={Modal}
												className={classNames(
													isOpenModal
														? "bg-primario text-white"
														: "  hover:bg-gray-700 hover:text-primario",
													"rounded-md px-3 py-2 text-sm font-bold tracking-widest focus:outline-none"
												)}
											>
												Crear
											</button>
										</div>
									</div>
								</div>
								<Menu as="div" className="ml-3">
									<div>
										<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<img
												className="h-8 w-8 rounded-full"
												src={`../src/peliculas/` + activo.user.img}
												alt=""
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={(e) => cerrarSesion()}
														className={classNames(
															active ? "bg-gray-100" : "",
															"block px-4 py-2 text-sm "
														)}
													>
														Cerrar sesión
													</button>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden bg-muted">
							<div className="space-y-1 px-2 pt-2 pb-3">
								<Link
									to="/"
									className={classNames(
										location.pathname == "/" && !isOpenModal
											? "bg-primario text-white"
											: "  hover:bg-gray-700 hover:text-primario",
										"rounded-md px-3 py-2 text-sm font-bold tracking-widest block"
									)}
								>
									Inicio
								</Link>
								<Link
									to="/Perfil"
									className={classNames(
										location.pathname == "/Perfil" && !isOpenModal
											? "bg-primario text-white"
											: "  hover:bg-gray-700 hover:text-primario",
										"rounded-md px-3 py-2 text-sm font-bold tracking-widest block"
									)}
								>
									Perfil
								</Link>
							</div>
						</Disclosure.Panel>
						<Disclosure.Panel>
							{({ close }) => (
								<button
									onClick={async () => {
										Modal();
										close();
									}}
									className={classNames(
										isOpenModal
											? "bg-primario text-white"
											: "  hover:bg-gray-700 hover:text-primario",
										"w-full rounded-md px-3 py-2 text-left text-sm font-bold tracking-widest focus:outline-none"
									)}
								>
									Crear
								</button>
							)}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Transition appear show={isOpenModal} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={Modal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="div">
										<p className="text-lg font-medium leading-6">
											Subir película
											<button
												onClick={Modal}
												className="
													inline-flex float-right justify-center rounded-md
													py-2 px-3 text-sm font-semibold
													focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												X
											</button>
										</p>
									</Dialog.Title>
									<div className="mt-2">
										<label
											htmlFor="file-upload"
											className="mt-2 mx-auto flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
										>
											<img src={img.preview} alt="" />
											<div className="space-y-1 text-center">
												<svg
													className="mx-auto h-12 w-12"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 48 48"
													aria-hidden="true"
												>
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												<p>Da clic para subir un archivo</p>
												<p className="text-xs">PNG, JPG, GIF up to 10MB</p>
											</div>
										</label>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only hidden"
											onChange={cambioImg} 
											accept=".jpg, .jpeg, .png"
										/>
									</div>
									<div className="grid grid-cols-2 gap-2 mt-3">
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="titulo"
												className="block text-sm font-medium leading-6"
											>
												Título
											</label>
											<input
												type="text"
												name="titulo"
												id="titulo"
												autoComplete="given-name"
												onChange={(e) => setHead(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="trailer"
												className="block text-sm font-medium leading-6"
											>
												Trailer
											</label>
											<input
												type="text"
												name="trailer"
												id="trailer"
												autoComplete="given-name"
												onChange={(e) => setTra(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="director"
												className="block text-sm font-medium leading-6"
											>
												Director
											</label>
											<input
												type="text"
												name="director"
												id="director"
												autoComplete="given-name"
												onChange={(e) => setDi(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="franquicia"
												className="block text-sm font-medium leading-6"
											>
												Franquicia
											</label>
											<input
												type="text"
												name="franquicia"
												id="franquicia"
												autoComplete="given-name"
												onChange={(e) => setFran(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="genero"
												className="block text-sm font-medium leading-6"
											>
												Genero
											</label>
											<input
												type="text"
												name="genero"
												id="genero"
												autoComplete="given-name"
												onChange={(e) => setGen(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2 sm:col-span-1">
											<label
												htmlFor="fecha"
												className="block text-sm font-medium leading-6"
											>
												Fecha de lanzamiento
											</label>
											<input
												type="date"
												name="fecha"
												id="fechaLanzamiento"
												autoComplete="given-name"
												onChange={(e) => setFecMov(e.target.value)}
												className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium leading-6  "
											>
												Sipnósis
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												onChange={(e) => setSip(e.target.value)}
												className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div className="mt-4">
										<button
											onClick={(e) => registrarPelicula(head, di, fran, gen, fecMov, sip, img, tra)}
											className="
                      inline-flex float-right justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-white hover:text-white
                      bg-primario-light hover:bg-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											¡Subir!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
			<Outlet />
		</>
	);
}
