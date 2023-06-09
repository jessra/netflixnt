import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesList } from '../features/movies/moviesSlice';
import { movieList } from '../features/movies/movieSlice';
import http from '../http-common';

export default function VerPelicula() {
	const dispatch = useDispatch();
	const activo = useSelector((state) => state.activo);
	const peliSelect = useSelector((state) => state.movie);
	const [review, setReview] = useState('');
	const [valor, setValor] = useState(1);
	function textareaHeight(textarea) {
		if (textarea) {
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	}
	function formatearFecha(fec) {
		if (fec) {
			return fec.split('T')[0];
		}
	}
	function limpiarCampos() {
		if (review) {
			setReview('');
			setValor(1);
		}
	}
	function eliminarPeli(mov, img) {
		http
			.delete(`/eliminar/${mov}/${img}`)
			.then((response) => {
				console.log(response.data);
				dispatch(moviesList());
				window.location.href = '/';
			})
			.catch((error) => {
				console.log('Error:', error);
				// Alert('Ha sucedido un problema', false)
			});
	}
	function crearReview(user, mov, review, valor) {
		if (review && valor) {
			http
				.post('/aggreview', { user: user, mov: mov, review: review, valor: valor })
				.then((response) => {
					if (response.data.r) {
						console.log(response.data);
						dispatch(movieList(mov));
					} else {
						console.log('Error:', response.data.msg);
					}
				})
				.catch((error) => {
					// Alert('Ha sucedido un problema', false)
				});
		}
	}
	const location = useLocation();
	const route = location.pathname.split('/')[2];
	if (route) {
		useEffect((e) => {
			dispatch(movieList(route));
		}, []);
		if (peliSelect.mov.id) {
			return (
				<>
					<div className="mt-5">
						<iframe
							className="w-full h-[20rem] sm:h-[30rem] lg:h-[40rem]"
							src={peliSelect.mov.link}
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
												<div className="flex-auto text-center">
													<p className="text-4xl text-bold dark:text-white">
														{peliSelect.mov.head}
													</p>
													<p className="text-sm dark:text-stone">Ver detalles</p>
												</div>
												<button
													type="button"
													className="rounded-md dark:text-white py-2 px-3 text-sm font-semibold border-4 border-transparent hover:border-primario focus-visible:outline"
													onClick={(e) =>
														eliminarPeli(peliSelect.mov.id, peliSelect.mov.img)
													}
												>
													Eliminar
												</button>
												<ChevronUpIcon
													className={`${
														open ? '' : 'rotate-180 transform'
													} h-12 w-12 dark:text-stone`}
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="p-4 text-sm divide-y divide-muted">
												<div className="border-t border-gray-200">
													<dl>
														<div className="bg-white-bone dark:bg-black-soft dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Titulo
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.head}
															</dd>
														</div>
														<div className="bg-white dark:bg-black-medium dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Director
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.director}
															</dd>
														</div>
														<div className="bg-white-bone dark:bg-black-soft dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Sipnosis
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.sipnosis}
															</dd>
														</div>
														<div className="bg-white dark:bg-black-medium dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Franquicia
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.franquicia}
															</dd>
														</div>
														<div className="bg-white-bone dark:bg-black-soft dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Genero
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.genero}
															</dd>
														</div>
														<div className="bg-white dark:bg-black-medium dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Fecha de publicación
															</dt>
															<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
																{peliSelect.mov.fecMov}
															</dd>
														</div>
														<div className="bg-white-bone dark:bg-black-soft dark:text-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
															<dt className="text-sm font-bold text-stone-dark dark:text-stone">
																Actores
															</dt>
															{peliSelect.mov.actors.map((act) => (
																<dd
																	key={act.nameAc}
																	className="mt-1 text-sm sm:col-span-2 sm:mt-0"
																>
																	{act.nameAc}
																</dd>
															))}
														</div>
													</dl>
												</div>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<p className="mt-4 dark:text-stone">Comentarios</p>
								<ul>
									{peliSelect.mov.reviews.map((comentario) => (
										<li
											key={comentario.id}
											className="my-6 divide-y divide-muted-neutral"
										>
											<div className="flex gap-x-6">
												<img
													className="h-16 w-16 rounded-full"
													src={`../src/peliculas/` + comentario.img}
													alt=""
												/>
												<div className='flex-auto'>
													<p className="text-base font-semibold leading-7 tracking-tight text-stone-dark dark:text-stone">
														{comentario.user} - {comentario.valor}
													</p>
													<p className="text-sm bg-white-bone dark:bg-black-soft dark:text-white-bone py-1.5 px-3 rounded-md">{comentario.review}</p>
												</div>
											</div>
										</li>
									))}
									{!activo.token ? (
										<li className="my-6 divide-y divide-muted-neutral">
											<div className="flex gap-x-6">
												<img
													className="h-16 w-16 rounded-full"
													src={`../src/peliculas/` + activo.user.img}
													alt=""
												/>
												<div className="w-full">
													<p className="text-base font-semibold leading-7 tracking-tight text-stone-dark dark:text-white-bone">
														{activo.user.name}
													</p>
													<div className='mb-2'>
														<label htmlFor="puntuacion" className='mr-2 dark:text-muted'>
															Dale una puntuación al video
														</label>
														<input
															type="number"
															id="puntuacion"
															min="1"
															max="5"
															name=""
															value={valor}
															onChange={(e) => setValor(e.target.value)}
															className="w-[3rem] rounded-md text-right py-1.5 px-3 focus:z-10 border-0
																focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
																dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
																dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario"
														/>
													</div>
													<textarea
														required
														className="
															resize-none block h-10 w-full rounded-t-md
															py-1.5 px-3 border-0 focus-visible:outline-0 sm:text-md sm:leading-6
															bg-white-bone dark:bg-black-medium dark:text-white
															focus-visible
														"
														name="newComentario"
														id="newComentario"
														cols="30"
														rows="10"
														value={review}
														onChange={(e) => {
															textareaHeight(document.querySelector('textarea'));
															setReview(e.target.value);
														}}
														placeholder="Comparte que piensas... 🖋️"
													></textarea>
												</div>
												<button
													onClick={(e) => {
														crearReview(
															activo.user.idUser,
															peliSelect.mov.id,
															review,
															valor
														);
														limpiarCampos();
													}}
													className="self-end rounded-md py-2 px-3 text-sm font-semibold text-white bg-primario-light hover:bg-primario focus-visible:outline"
												>
													{' '}
													Enviar{' '}
												</button>
											</div>
										</li>
									) : (
										''
									)}
								</ul>
							</div>
							<div className="flex h-full flex-col bg-white dark:bg-black-medium shadow-xl">
								<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
									<div className="flow-root">
										<ul role="list" className="divide-y divide-muted-neutral">
											{peliSelect.mov.recomendacion.map((pelicula) => (
												<li key={pelicula.idMov}>
													<Link
														to={`/Movie/` + pelicula.idMov}
														className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-center xl:items-start py-6"
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
																	<p className="font-bold dark:text-white">
																		{pelicula.head}
																	</p>
																	<p className="ml-4 dark:text-muted">
																		{formatearFecha(pelicula.fecMov)}
																	</p>
																</div>
															</div>
															<p className="dark:text-white-bone">{pelicula.sipnosis}</p>
														</div>
													</Link>
												</li>
											))}
										</ul>
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
