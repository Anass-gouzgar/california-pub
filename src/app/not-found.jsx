import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <Image
        src="https://images.unsplash.com/photo-1615378809998-afc205e73bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1000}
        height={1000}
        alt="cnc machin"
        className="object-cover h-64 w-full "
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Nous ne pouvons pas trouver cette page.
          </h1>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Essayez de rechercher à nouveau, ou revenez à l'accueil pour
            recommencer depuis le début.
          </p>

          <Link
            href="#"
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