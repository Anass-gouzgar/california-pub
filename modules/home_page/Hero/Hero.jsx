import React from "react";
import Image from "next/image";
import img from "../../../public/assets/images/machine.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" h-auto grid md:grid-cols-2 bg-gray-900 pt-32 sm:pt-24 mainBg px-6 py-24 gap-5 sm:p-10 ">
      {/* hero description */}
        <div className="flex flex-col justify-center mx-auto max-w-xl md:gap-6 ">
          <h2 className=" text-2xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Bienvenue sur{" "}
            <span className="text-6xl mt-10 font-bold text-amber-400">
              California Pub
            </span>
          </h2>

          <p className="sm:text-2xl  md:mt-4 md:block text-white">
            Notre engagement envers l'excellence transforme chaque projet en une
            expérience inoubliable. Commencez votre voyage vers l'excellence
            avec une consultation personnalisée dès aujourd'hui.
          </p>

          <div className="flex gap-4 mt-4 md:mt-8">
            <Link
              href="#"
              className="inline-block rounded bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
            >
              Explorer Nos Services
            </Link>
            <Link
              href="#"
              className="inline-block rounded bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
            >
             Contactez-nous Maintenant
            </Link>

          </div>
        </div>
      {/* machine image */}
      <div className="grid place-items-center bg-yelilow-200">
        <Image alt="machine cnc" src={img} className="w-full object-cover " />
      </div>
    </section>
  );
};

export default Hero;
