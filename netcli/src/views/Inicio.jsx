import Filtros from '../components/Filtros';

const peliculas = [
  {
    id: 1,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  {
    id: 2,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  {
    id: 3,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  {
    id: 4,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  {
    id: 5,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  {
    id: 6,
    name: 'El gato',
    href: '/ver',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: 'El gato',
    fecha: '12/02/20',
    descripcion: 'Era negro hasta que se baño',
  },
  // More products...
];

export default function Example() {
  return (
    <div>
      <Filtros />
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h3 className='text-2xl font-bold tracking-tight dark:text-white'>Películas</h3>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className='group relative p-3 rounded-lg bg-stone-light dark:bg-black-medium'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                <img
                  src={pelicula.imageSrc}
                  alt={pelicula.imageAlt}
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <p className='text-xl dark:text-white'>
                    <a href={pelicula.href}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {pelicula.name}
                    </a>
                  </p>
                  <p className='mt-1 text-sm dark:text-muted'>{pelicula.descripcion}</p>
                </div>
                <p className='text-sm font-medium dark:text-muted'>{pelicula.fecha}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
