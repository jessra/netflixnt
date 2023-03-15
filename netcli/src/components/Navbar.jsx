import { Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, Link, useLocation } from "react-router-dom";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
	const location = useLocation();
	return (
		<>
			<Disclosure
				as="nav"
				className="sticky w-full top-0 bg-zinc-900 md:bg-transparent z-50"
			>
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
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
													location.pathname == "/"
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
											>
												Inicio
											</Link>
											<Link
												to="/Perfil"
												className={classNames(
													location.pathname == "/Perfil"
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
											>
												Perfil
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pt-2 pb-3">
								<Disclosure.Button
									as={Fragment}
									href="/"
									className={classNames(
										location.pathname == "/"
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
								>
									Inicio
								</Disclosure.Button>
								<Disclosure.Button
									as={Fragment}
									href="/Perfil"
									className={classNames(
										location.pathname == "/Perfil"
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
								>
									Perfil
								</Disclosure.Button>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			<Outlet />
		</>
	);
}
