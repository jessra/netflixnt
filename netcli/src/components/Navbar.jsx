import { Disclosure, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, Link, useLocation } from "react-router-dom";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
	const [isOpenModal, setisOpenModal] = useState(true);

	function closeModal() {
		setisOpenModal(false);
	}

	function openModal() {
		setisOpenModal(true);
	}
	const location = useLocation();
	return (
		<>
			<Disclosure
				as="nav"
				className="sticky w-full top-0 bg-zinc-900 md:bg-transparent z-50 manrope border-b-2 border-stone"
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
												onClick={openModal}
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
										openModal();
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
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
									<Dialog.Title as="Fragment" className="">
										<p className="text-lg font-medium leading-6">
											Sube tu película
											<button
												onClick={closeModal}
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
										/>
									</div>
									<div className="grid grid-cols-2 gap-2 mt-3">
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
												className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
										<div className="col-span-2">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Descripción
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div className="mt-4">
										<button
											onClick={closeModal}
											className="
                      inline-flex float-right justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-muted hover:text-white
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
