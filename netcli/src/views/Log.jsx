import { useState, useContext } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { Contexto_Funciones } from '../context/contextoFunciones';

export default function Log() {
	const { iniciarCuenta, registrarCuenta } = useContext(Contexto_Funciones);
	const [registro, setRegistro] = useState(true);
	const [userLog, setUserLog] = useState('');
	const [passLog, setPassLog] = useState('');
	const [userReg, setUserReg] = useState('');
	const [passReg, setPassReg] = useState('');
	const [imgReg, setImgReg] = useState({ preview: '', data: '' });
	const cambioImg = (e) => {
		const img2 = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setImgReg(img2);
	};
	const reg = (e) => {
		e.preventDefault();
		registrarCuenta(userReg, passReg, imgReg);
	};
	const log = (e) => {
		e.preventDefault();
		iniciarCuenta(userLog, passLog);
	};
	switch (registro) {
		case true:
			return (
				<>
					<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
						<div className="w-full max-w-md space-y-8">
							<div>
								<img className="mx-auto h-12 w-auto" src="/Logo.png" alt="Your Company" />
								<h2 className="mt-6 text-center text-3xl font-bold tracking-tight  ">
									Crea una cuenta
								</h2>
							</div>
							<form className="mt-8 space-y-6">
								<input type="hidden" name="remember" defaultValue="true" />
								<div className="-space-y-px rounded-md shadow-sm">
									<div>
										<div className="my-3 mx-auto w-[15rem]">
											<input
												type="file"
												name="photo"
												id="img"
												className="hidden"
												onChange={cambioImg}
												accept=".jpg, .jpeg, .png"
											/>
											<div className={`${
													imgReg.preview ? 'flex-col gap-y-2' : ''
												} mt-2 flex items-center`
											}>
												{imgReg.preview ? (
													<>
														<div className='rounded-md overflow-hidden'>
															<img src={imgReg.preview} alt="" />
														</div>
													</>
												) : (
													<>
														<span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
															<svg
																className="h-full w-full  "
																fill="currentColor"
																viewBox="0 0 24 24"
															>
																<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
															</svg>
														</span>
													</>
												)}
												<label
													className="ml-5 rounded-md border bg-white py-1.5 px-2.5 text-sm font-semibold shadow-sm hover:bg-gray-50block text-sm font-medium leading-6"
													htmlFor="img"
												>
													Imagen de usuario
												</label>
											</div>
										</div>
									</div>
									<div>
										<label htmlFor="usuario" className="sr-only">
											Usuario
										</label>
										<input
											id="usuario"
											name="usuario"
											type="text"
											required
											className="block w-full rounded-t-md border-0 py-1.5 px-3 ring-1 ring-inset ring-muted-neutral focus:z-10 focus-visible:ring-0 focus:ring-primario sm:text-sm sm:leading-6"
											placeholder="Nombre de usuario"
											onChange={(e) => setUserReg(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="contraseña" className="sr-only">
											Contraseña
										</label>
										<input
											id="contraseña"
											name="contraseña"
											type="password"
											autoComplete="current-password"
											required
											className="block w-full rounded-b-md border-0 py-1.5 px-3 ring-1 ring-inset ring-muted-neutral focus:z-10 focus-visible:ring-0 focus:ring-primario sm:text-sm sm:leading-6"
											placeholder="Contraseña"
											onChange={(e) => setPassReg(e.target.value)}
										/>
									</div>
								</div>
								<div>
									<p className="mt-2 text-center text-sm  ">
										<span className="font-medium">
											¿Ya tienes una cuenta? Inicia sesión aquí
										</span>
									</p>
									<button
										onClick={() => setRegistro(false)}
										className="w-full rounded-md
                      py-2 px-3 text-sm font-semibold
                      border-4 border-transparent hover:border-primario
                      focus-visible:outline"
									>
										Iniciar sesión
									</button>
								</div>
								<div>
									<button
										type="submit"
										className="
                      group flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-white
                      bg-primario-light hover:bg-primario
                      focus-visible:outline"
										onClick={reg}
									>
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<LockClosedIcon
												className="h-5 w-5 group-hover: "
												aria-hidden="true"
											/>
										</span>
										Registrarse
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			);
		default:
			return (
				<>
					<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
						<div className="w-full max-w-md space-y-8">
							<div>
								<img className="mx-auto h-12 w-auto" src="/Logo.png" alt="Your Company" />
								<h2 className="mt-6 text-center text-3xl font-bold tracking-tight  ">
									Inicia sesión en tu cuenta
								</h2>
							</div>
							<form className="mt-8 space-y-6">
								<input type="hidden" name="remember" defaultValue="true" />
								<div className="-space-y-px rounded-md shadow-sm">
									<div>
										<label htmlFor="usuario" className="sr-only">
											Usuario
										</label>
										<input
											id="usuario"
											name="usuario"
											type="usuario"
											required
											className="block w-full rounded-t-md border-0 px-2 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:  focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Usuario"
											onChange={(e) => setUserLog(e.target.value)}
										/>
									</div>
									<div>
										<label htmlFor="contraseña" className="sr-only">
											Contraseña
										</label>
										<input
											id="contraseña"
											name="contraseña"
											type="password"
											autoComplete="current-password"
											required
											className="block w-full rounded-b-md border-0 px-2 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:  focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Contraseña"
											onChange={(e) => setPassLog(e.target.value)}
										/>
									</div>
								</div>
								<div>
									<p className="mt-2 text-center text-sm  ">
										<span className="font-medium">
											¿Aún no tienes una cuenta? Crea una aquí
										</span>
									</p>
									<button
										onClick={() => setRegistro(true)}
										className="w-full rounded-md
                      py-2 px-3 text-sm font-semibold
                      border-4 border-transparent hover:border-primario
                      focus-visible:outline"
									>
										Registrarse
									</button>
								</div>
								<div>
									<button
										type="submit"
										className="
                      group flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-white
                      bg-primario-light hover:bg-primario
                      focus-visible:outline"
										onClick={log}
									>
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<LockClosedIcon className="h-5 w-5 text-white" aria-hidden="true" />
										</span>
										Iniciar sesión
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			);
	}
}
