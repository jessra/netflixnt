import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Filtros from "../components/Filtros";

const peliculas = [
	{
		id: 1,
		titulo: "Throwback Hip Bag",
		href: "/ver",
		fecha: "12/02/23",
		actores: "mendez",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
		descripcion:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
	},
	{
		id: 1,
		titulo: "Throwback Hip Bag",
		href: "/ver",
		fecha: "12/02/23",
		actores: "mendez",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
		descripcion:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
	},
	{
		id: 1,
		titulo: "Throwback Hip Bag",
		href: "/ver",
		fecha: "12/02/23",
		actores: "mendez",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
		imageAlt:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
		descripcion:
			"Salmon orange fabric pouch with match zipper, muted-neutral pull, and adjustable hip belt.",
	},
	// More peliculas...
];

export default function VerPelicula() {
	return (
		<>
			<Filtros />
			<div className="mt-5">
				<iframe
					className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem]"
					src="https://www.youtube.com/embed/sIRqhkk0q_w"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
				<div className="grid lg:grid-cols-3">
					<div className="lg:col-span-2 mx-2">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primario focus-visible:ring-opacity-75">
										<div>
											<h3 className="text-3xl">titulo película</h3>
											<p className="text-sm">Ver detalles</p>
										</div>
										<ChevronUpIcon
											className={`${
												open ? "rotate-180 transform" : ""
											} h-12 w-12`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="p-4 text-sm divide-y divide-muted">
										<div className="border-t border-gray-200">
											<dl>
												<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">Titulo</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														Margot Foster
													</dd>
												</div>
												<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Director
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														margotfoster@example.com
													</dd>
												</div>
												<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Descripción
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
														incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
														consequat sint. Sit id mollit nulla mollit nostrud in ea
														officia proident. Irure nostrud pariatur mollit ad adipisicing
														reprehenderit deserunt qui eu.
													</dd>
												</div>
												<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">
														Fecha de publicación
													</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														$120,000
													</dd>
												</div>
												<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt className="text-sm font-medium text-gray-500">No se que mas iba</dt>
													<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
														Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
														incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
														consequat sint. Sit id mollit nulla mollit nostrud in ea
														officia proident. Irure nostrud pariatur mollit ad adipisicing
														reprehenderit deserunt qui eu.
													</dd>
												</div>
											</dl>
										</div>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
					<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
						<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
							<div className="mt-8">
								<div className="flow-root">
									<ul role="list" className="-my-6 divide-y divide-muted-neutral">
										{peliculas.map((pelicula) => (
											<li key={pelicula.id} className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center py-6">
												<div className="h-40 md:w-32 flex-shrink-0 overflow-hidden rounded-md border border-muted-neutral">
													<img
														src={pelicula.imageSrc}
														alt={pelicula.imageAlt}
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="ml-4 flex flex-1 flex-col">
													<div>
														<div className="flex justify-between text-base font-medium ">
															<p className="font-bold">
																<Link to={pelicula.href}></Link>
																{pelicula.titulo}
															</p>
															<p className="ml-4">{pelicula.fecha}</p>
														</div>
														<p className="mt-1 text-sm ">{pelicula.actores}</p>
													</div>
													<p className="">{pelicula.descripcion}</p>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
