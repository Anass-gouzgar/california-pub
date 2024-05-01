"use client"
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Map = () => {
  return (
    <section id="à_propos" className="bg-slate-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* map section */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first order-last lg:h-full"
          >
    


            <iframe

              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d862.9564427331262!2d-9.55310314193298!3d30.0991757957756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3950029332a19%3A0x77610e42452dba0c!2sCalifornia%20pub%20cnc!5e0!3m2!1sfr!2sma!4v1714130414577!5m2!1sfr!2sma" width="600" height="450" 
              title="map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-[1000px] rounded-2xl"
            ></iframe>
          </div>
          {/* description */}
          <div
            data-aos="flip-left"
            className="lg:py-24 p-4 rounded-2xl bg-black/50"
          >
            <h2 className="text-white text-3xl font-bold sm:text-4xl text-center sm:text-start">
              Développez votre public
            </h2>
            <p className="mt-4 text-xl text-white">
              Chez{" "}
              <span className="text-mainYellowColor text-2xl font-bold">
                California Pub
              </span>
              , nous vous aidons à promouvoir votre entreprise et à toucher un
              public plus large. Que vous ayez besoin de services d'impression,
              de publicité, de découpe laser ou de routage CNC, nous avons les
              solutions pour vous.
            </p>
            <ScrollLink
               to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              className="text-lg cursor-pointer mt-8 inline-block rounded bg-mainYellowColor px-12 py-3 font-medium transition hover:bg-amber-300 focus:outline-none focus:ring hover:scale-105 duration-300 focus:ring-red-700"
            >
              Commencez aujourd'hui
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map