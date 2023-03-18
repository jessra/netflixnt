import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useEffect, useContext, useState } from "react";
import { Contexto_Funciones } from "../context/contextoFunciones";

const comentarios = [
	{
		usuario: "Leslie Alexander",
		mensaje:
			"Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	// More people...
];

export default function VerPelicula() {
	const { peliSelect, peliculaSelect, activo } = useContext(Contexto_Funciones);
  const [review, setReview] = useState('')
  const [valor, setValor] = useState(0)
	function textareaHeight(textarea) {
		if (textarea) {
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
		setReview(textarea.target.value)
	}
	function formatearFecha(fec) {
		return fec.split('T')[0]
	}
	const location = useLocation()
	const route = location.pathname.split("/")[2];
	if (route) {
		useEffect((e) => {
			peliculaSelect(route)	
		}, []);
		if (peliSelect.id) {
			return (
				<>
					<div className="mt-5">
						<iframe
							className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem]"
							src={peliSelect.link}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
						<div className="grid lg:grid-cols-3">
							<div className="lg:col-span-2 mx-2">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between items-center rounded-lg px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primario focus-visible:ring-opacity-75">
												<div>
													<h3 className="text-3xl">{peliSelect.head}</h3>
													<p className="text-sm">Ver detalles</p>
												</div>
												<ChevronUpIcon
													className={`${open ? "rotate-180 transform" : ""} h-12 w-12`}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="p-4 text-sm divide-y divide-muted">
												<div className="border-t border-gray-200">
													<dl>
														<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">Titulo</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.head}
															</dd>
														</div>
														<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">Director</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
															{peliSelect.director}
															</dd>
														</div>
														<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">
																Sipnosis
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.sipnosis}
															</dd>
														</div>
														<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">Franquicia</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
															{peliSelect.franquicia}
															</dd>
														</div>
														<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">
																Genero
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.genero}
															</dd>
														</div>
														<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">
																Fecha de publicación
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">{peliSelect.fecMov}</dd>
														</div>
														<div className="bg-stone-light px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark">
																Actores
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.actors}
															</dd>
														</div>
													</dl>
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<p className="mt-4">Comentarios</p>
								<ul>
									{comentarios.map((comentario) => (
										<li key={comentario.name} className="my-6 divide-y divide-muted-neutral">
											<div className="flex gap-x-6">
												<img
													className="h-16 w-16 rounded-full"
													src={comentario.imageUrl}
													alt=""
												/>
												<div>
													<p className="text-base font-semibold leading-7 tracking-tight text-stone-dark">
														{comentario.usuario}
													</p>
													<p className="text-sm">{comentario.mensaje}</p>
												</div>
											</div>
										</li>
									))}
									<li className="my-6 divide-y divide-muted-neutral">
										<div className="flex gap-x-6">
											<img
												className="h-16 w-16 rounded-full"
												src={`../src/peliculas/` + activo.user.img}
												alt=""
											/>
											<div className="w-full">
												<p className="text-base font-semibold leading-7 tracking-tight text-stone-dark">
													{activo.user.name}
												</p>
												<input type="number" min="1" max="5" name="" value={valor} onChange={(e) => setValor(e.target.value)}/>
												<textarea
													required
													className="resize-none block h-10 w-full rounded-t-md border-0 py-1.5 px-3 ring-1 ring-inset ring-muted-neutral focus:z-10 focus-visible:ring-0 focus:ring-primario sm:text-sm sm:leading-6"
													name="newComentario"
													id="newComentario"
													cols="30"
													rows="10"
													// value=""
													onChange={(e) => {
														textareaHeight(document.querySelector("textarea"));
													}}
													placeholder="Comparte que piensas... 🖋️"
												></textarea>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
								<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
									<div className="mt-8">
										<div className="flow-root">
											<ul role="list" className="my-6 divide-y divide-muted-neutral">
												{peliSelect.recomendacion.map((pelicula) => (
													<li
														key={pelicula.idMov}
														className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center py-6"
													>
														<div className="h-40 md:w-32 flex-shrink-0 overflow-hidden rounded-md border border-muted-neutral">
															<img
																src={`../src/peliculas/` + pelicula.img}
																alt={`Imagen película ` + pelicula.head}
																className="h-full w-full object-cover object-center"
															/>
														</div>
														<div className="ml-4 flex flex-1 flex-col">
															<div>
																<div className="flex justify-between text-base font-medium ">
																	<p className="font-bold">
																		<Link to={`/Movie/` + pelicula.idMov}></Link>
																		{pelicula.head}
																	</p>
																	<p className="ml-4">{formatearFecha(pelicula.fecMov)}</p>
																</div>
															</div>
															<p className="">{pelicula.sipnosis}</p>
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
	}
}
