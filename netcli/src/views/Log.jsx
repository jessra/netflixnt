import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Log() {
	const [registro, setRegistro] = useState(true);
	switch (registro) {
		case true:
			return (
				<>
					<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
						<div className="w-full max-w-md space-y-8">
							<div>
								<img className="mx-auto h-12 w-auto" src="/Logo.png" alt="Your Company" />
								<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
									Crea una cuenta
								</h2>
							</div>
							<form className="mt-8 space-y-6" action="#" method="POST">
								<input type="hidden" name="remember" defaultValue="true" />
								<div className="-space-y-px rounded-md shadow-sm">
									<div>
										<input type="file" name="photo" id="img" />
										<label htmlFor="img" className="sr-only">
											Imagen de usuario
										</label>
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
											className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Correo electrónico"
										/>
									</div>
									<div>
										<label htmlFor="contraseña" className="sr-only">
											Contraseña
										</label>
										<input
											id="contraseña"
											name="contraseña"
											type="contraseña"
											autoComplete="current-password"
											required
											className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Contraseña"
										/>
									</div>
								</div>
								<div>
									<p className="mt-2 text-center text-sm text-gray-600">
										<span className="font-medium">
											¿Ya tienes una cuenta? Inicia sesión aquí
										</span>
									</p>
									<button
										onClick={() => setRegistro(false) }
										className="group relative flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold
                      border-4 border-transparent hover:border-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Iniciar sesión
									</button>
								</div>
								<div>
									<button
										type="submit"
										className="
                      group relative flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-muted hover:text-white
                      bg-primario-light hover:bg-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<LockClosedIcon
												className="h-5 w-5 group-hover:text-indigo-400"
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
								<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
									Inicia sesión en tu cuenta
								</h2>
							</div>
							<form className="mt-8 space-y-6" action="#" method="POST">
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
											className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Usuario"
										/>
									</div>
									<div>
										<label htmlFor="contraseña" className="sr-only">
											Contraseña
										</label>
										<input
											id="contraseña"
											name="contraseña"
											type="contraseña"
											autoComplete="current-password"
											required
											className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											placeholder="Contraseña"
										/>
									</div>
								</div>
								<div>
									<p className="mt-2 text-center text-sm text-gray-600">
										<span className="font-medium">
											¿Aún no tienes una cuenta? Crea una aquí
										</span>
									</p>
									<button
										onClick={() => setRegistro(true) }
										className="group relative flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold
                      border-4 border-transparent hover:border-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Registrarse
									</button>
								</div>
								<div>
									<button
										type="submit"
										className="
                      group relative flex w-full justify-center rounded-md
                      py-2 px-3 text-sm font-semibold text-muted hover:text-white
                      bg-primario-light hover:bg-primario
                      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<LockClosedIcon
												className="h-5 w-5 group-hover:text-indigo-400"
												aria-hidden="true"
											/>
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
