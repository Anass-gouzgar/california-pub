import React from 'react'
import Link from 'next/link'


const Map = () => {
  return (
    <section className="dark:bg-slate-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* map section */}
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first order-last lg:h-full">
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d610.2025949542422!2d-9.553810299680501!3d30.099136525864036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1712451356559!5m2!1sen!2sma"
              width="100%"
              height="550"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-[1000px] rounded-2xl"
            ></iframe>
          </div>
{/* description */}
          <div className="lg:py-24 p-4 rounded-2xl bg-black/50">
            <h2 className="dark:text-white text-3xl font-bold sm:text-4xl text-center sm:text-start">
              Développez votre public
            </h2>

            <p className="mt-4 text-xl dark:text-white">
              Chez{" "}
              <span className="text-mainYellowColor text-2xl font-bold">
                California Pub
              </span>
              , nous vous aidons à promouvoir votre entreprise et à toucher un
              public plus large. Que vous ayez besoin de services d'impression,
              de publicité, de découpe laser ou de routage CNC, nous avons les
              solutions pour vous.
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded bg-mainYellowColor px-12 py-3 text-sm font-medium darktext-black transition hover:bg-amber-300 focus:outline-none focus:ring hover:scale-105 duration-300 focus:ring-red-700"
            >
              Commencez aujourd'hui 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map