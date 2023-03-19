import { Fragment, useState, useContext } from 'react';
import { Contexto_Funciones } from '../context/contextoFunciones';
import { MinusCircleIcon, XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';

export default function Crear({ isOpenModal, Modal }) {
	const { registrarPelicula } = useContext(Contexto_Funciones);
	const [head, setHead] = useState('');
	const [di, setDi] = useState('');
	const [fran, setFran] = useState('');
	const [gen, setGen] = useState('');
	const [fecMov, setFecMov] = useState('');
	const [sip, setSip] = useState('');
	const [img, setImg] = useState({ preview: '', data: '' });
	const [tra, setTra] = useState('');
	const [actores, aggActor] = useState([
		{
			id: 1,
			nombre: '',
		},
	]);
	let nextId = 0;
	const cambioImg = (e) => {
		const img2 = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setImg(img2);
	};
	return (
		<>
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

					<div className="fixed inset-0 top-auto md:top-0 overflow-y-auto">
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
								<Dialog.Panel className="w-full md:max-w-xl max-h-[90vh] overflow-y-scroll transform overflow-hidden rounded-2xl bg-white dark:bg-black-obscure p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="div">
										<p className="text-lg dark:text-white font-medium leading-6">
											Subir película
											<button
												onClick={Modal}
												className="
													inline-flex float-right hover:text-danger justify-center rounded-md
													py-2 px-3 text-sm font-semibold
													focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												<XMarkIcon
													className="block h-6 w-6 hover:text-danger"
													aria-hidden="true"
												/>
											</button>
										</p>
									</Dialog.Title>
									<div className="mt-2">
										<label
											htmlFor="file-upload"
											className="mt-2 mx-auto w-full flex justify-center rounded-md border-2 border-dashed border-stone-dark dark:border-stone p-2 dark:text-white-bone"
										>
											{img.preview ? (
												<>
													<img src={img.preview} alt="" />
												</>
											) : (
												<div className="space-y-1 text-center dark:text-stone">
													<svg
														className="mx-auto h-16 w-16"
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
											)}
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
									<div className="grid grid-cols-3 gap-2 mt-3">
										<div className="col-span-3 sm:col-span-1">
											<label
												htmlFor="titulo"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Título
											</label>
											<input
												type="text"
												name="titulo"
												id="titulo"
												autoComplete="given-name"
												onChange={(e) => setHead(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3 sm:col-span-1">
											<label
												htmlFor="director"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Director
											</label>
											<input
												type="text"
												name="director"
												id="director"
												autoComplete="given-name"
												onChange={(e) => setDi(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3 sm:col-span-1">
											<label
												htmlFor="franquicia"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Franquicia
											</label>
											<input
												type="text"
												name="franquicia"
												id="franquicia"
												autoComplete="given-name"
												onChange={(e) => setFran(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3">
											<label
												htmlFor="trailer"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Trailer
											</label>
											<input
												type="text"
												name="trailer"
												id="trailer"
												autoComplete="given-name"
												onChange={(e) => setTra(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium leading-6   dark:text-white-bone"
											>
												Sipnósis
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												onChange={(e) => setSip(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3 sm:col-span-1">
											<label
												htmlFor="genero"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Genero
											</label>
											<input
												type="text"
												name="genero"
												id="genero"
												autoComplete="given-name"
												onChange={(e) => setGen(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										<div className="col-span-3 sm:col-span-1">
											<label
												htmlFor="fecha"
												className="block text-sm font-medium leading-6 dark:text-white-bone"
											>
												Fecha de lanzamiento
											</label>
											<input
												type="date"
												name="fecha"
												id="fechaLanzamiento"
												autoComplete="given-name"
												onChange={(e) => setFecMov(e.target.value)}
												className="
													block w-full rounded-md py-1.5 px-3 focus:z-10 border-0
													focus-visible:outline-0 sm:text-md sm:leading-6 bg-white-bone dark:bg-black-medium dark:text-white ring-2 ring-transparent
													dark:focus-visible:ring-offset-black-obscure focus-visible:ring-offset-2 focus-visible:ring-primario
													dark:hover:ring-offset-black-obscure hover:ring-offset-2 hover:ring-primario
												"
											/>
										</div>
										{actores.map((actor, index) => (
											<div className="col-span-3 sm:col-span-1" key={index}>
												<label
													htmlFor={actor.id}
													className="block text-sm font-medium leading-6 dark:text-white-bone"
												>
													Actor
												</label>
												<div
													className="
														flex border-2 border-white dark:border-transparent rounded-md
														focus-visible:border-primario
														hover:border-primario
													"
												>
													<input
														type="text"
														name="actor"
														id={actor.id}
														autoComplete="given-name"
														onChange={(e) =>
															aggActor(
																actores.map((a) => {
																	if (a.id == actor.id) {
																		return { ...a, nombre: e };
																	} else {
																		return a;
																	}
																})
															)
														}
														value={actor.nombre}
														className="
															block w-full bg-white-bone dark:bg-black-medium dark:text-white
															focus-visible:outline-0 rounded-md rounded-r-none
															px-2 py-1.5 shadow-sm sm:text-sm sm:leading-6
														"
													/>
													<button
														className="
															bg-white-bone dark:bg-black-medium dark:text-white rounded-md rounded-l-none
														"
														onClick={() => {
															aggActor(actores.filter((a) => a.id !== actor.id));
														}}
													>
														<MinusCircleIcon
															className="block h-6 w-6 hover:text-danger"
															aria-hidden="true"
														/>
													</button>
												</div>
											</div>
										))}
									</div>
									<div className="mt-4">
										<button
											onClick={() => aggActor([...actores, { id: nextId++, nombre: '' }])}
											className="w-full block rounded-md dark:text-white-bone
                      py-2 px-3 text-sm font-semibold
                      border-4 border-transparent hover:border-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Agregar otro actor
										</button>
									</div>
									<div className="mt-4">
										<button
											onClick={(e) =>
												registrarPelicula(head, di, fran, gen, fecMov, sip, img, tra)
											}
											className="
                      w-full block justify-center rounded-md
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
		</>
	);
}
