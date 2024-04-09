import Link from 'next/link'
import Image from 'next/image'
import not_found from '@/public/assets/images/not-found.png'




const NotFound = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-900">
      <Image
        src={not_found}
        width={1000}
        height={1000}
        alt="cnc machin"
        className="object-cover h-64 w-full "
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight  sm:text-4xl text-white">
            Nous ne pouvons pas trouver cette page.
          </h1>

          <p className="mt-4  text-gray-400">
            Essayez de rechercher à nouveau, ou revenez à l'accueil pour
            recommencer depuis le début.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded bg-mainYellowColor px-5 py-3 text-sm font-medium text-black hover:bg-amber-500 focus:outline-none focus:ring"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;