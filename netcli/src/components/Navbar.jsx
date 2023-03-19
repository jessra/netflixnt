import { Disclosure, Dialog, Transition, Menu } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Outlet, Link, useLocation } from 'react-router-dom';
import SwitchDarkMode from './SwitchDarkMode';
import Crear from "../views/Crear"
import { useDispatch, useSelector } from "react-redux";
import { activoList } from "../features/movies/activoSlice";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(activoList())
	}, [])
	const activo = useSelector(state => state.activo)
	const [isOpenModal, setisOpenModal] = useState(false);
	function Modal() {
		setisOpenModal(!isOpenModal);
	}
	function cerrarSesion() {
		localStorage.removeItem("netflixnt");
		dispatch(activoList())
		window.location.href = '/Log';
	}
	return (
		<>
			<Disclosure
				as="nav"
				className="sticky w-full top-0 bg-white dark:bg-black-soft z-50 manrope border-b-2 border-stone dark:border-black-medium"
			>
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 dark:text-white-bone focus-visible:outline-0">
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
									<div className="hidden sm:ml-6 sm:block dark:bg-dark-medium">
										<div className="flex space-x-4">
											<Link
												to="/"
												className={classNames(
													location.pathname == '/' && !isOpenModal
														? 'bg-primario text-white'
														: 'hover:bg-gray-700 hover:text-primario',
													'rounded-md px-3 py-2 text-sm font-bold tracking-widest dark:text-white'
												)}
											>
												Inicio
											</Link>
											{!activo.token ? ('') : 
												(<button
													type="button"
													onClick={Modal}
													className={classNames(
														isOpenModal
															? 'bg-primario text-white'
															: '  hover:bg-gray-700 hover:text-primario',
														'rounded-md px-3 py-2 text-sm font-bold tracking-widest focus:outline-none dark:text-white'
													)}
												>
													Crear
												</button>)
											}
										</div>
									</div>
								</div>
								<div className="lg:py-16">
									<SwitchDarkMode />
								</div>
								<Menu as="div" className="ml-3">
									<div>
										<Menu.Button
											className="
												flex max-w-xs items-center rounded-full text-sm focus:outline-none
												focus:ring-2 focus:ring-primario focus:ring-offset-2 focus:ring-offset-muted
											"
										>
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
										<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-black-medium dark:text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<button
														onClick={(e) => cerrarSesion()}
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm '
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

						<Disclosure.Panel className="sm:hidden bg-muted dark:bg-black-medium">
							<div className="space-y-1 px-2 pt-2 pb-3">
								<Link
									to="/"
									className={classNames(
										location.pathname == '/' && !isOpenModal
											? 'bg-primario text-white'
											: '',
										'rounded-md px-3 py-2 text-sm font-bold tracking-widest block'
									)}
								>
									Inicio
								</Link>
							</div>
						</Disclosure.Panel>
						{!activo.token ? ('') :
						(<Disclosure.Panel>
							{({ close }) => (
								<button
									onClick={async () => {
										Modal();
										close();
									}}
									className={classNames(
										isOpenModal
											? 'bg-primario text-white'
											: ' ',
										'w-full dark:text-white rounded-md px-3 py-2 text-left text-sm font-bold tracking-widest focus:outline-none'
									)}
								>
									Crear
								</button>
							)}
						</Disclosure.Panel>)
						}
					</>
				)}
			</Disclosure>
			<Crear isOpenModal={isOpenModal} Modal={Modal}></Crear>
			<Outlet />
		</>
	);
}