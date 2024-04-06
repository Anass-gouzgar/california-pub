import React from "react";
import Image from "next/image";
import img from "../../../public/assets/images/cnc-router.png";
import coc from "../../../public/assets/images/coc_2.png";
import t from "../../../public/assets/images/t.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" h-auto grid md:grid-cols-2 p-44 bg-slate-900 pt-32 sm:pt-44 mainBg px-6 py-24g pb-44 gap-5 sm:p-10 ">
      {/* hero description */}
      <div className="flex flex-col justify-end md:justify-center mx-auto max-w-xl md:gap-6 md:h-[80%] ">
        <h2 className=" text-2xl font-bold text-gray-900 md:text-5xl dark:text-white">
          Bienvenue sur{" "}
          <span className="text-6xl font-bold text-[#FEE012]">
            California Pub
          </span>
        </h2>

        <p className="sm:text-2xl  md:mt-4 md:block text-white">
          Notre engagement envers l'excellence transforme chaque projet en une
          expérience inoubliable. Commencez votre voyage vers l'excellence avec
          une consultation personnalisée dès aujourd'hui.
        </p>

        <div className="flex gap-4 mt-4 md:mt-8">
          <Link
            href="#"
            className="inline-block rounded bg-mainYellowColor px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
          >
            Explorer Nos Services
          </Link>
          <Link
            href="#"
            className="inline-block rounded bg-mainYellowColor px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
          >
            Contactez-nous Maintenant
          </Link>
        </div>
      </div>
      {/* machine image */}
      <div className="hidden md:flex h-[80%] bg-yellow-300  rounded-xl ovetrflow-hidden">
        <Image alt="machine cnc" src={coc} className="w-full h-auto object-cover " />
      </div>
    </section>
  );
};

export default Hero;
