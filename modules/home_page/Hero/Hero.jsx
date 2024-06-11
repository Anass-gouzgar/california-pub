'use client'
import Image from "next/image";
// import img from "../../../public/assets/images/cnc-router.png";
import img from "../../../public/assets/images/2.png";
import arrow from "../../../public/assets/images/yellow arrow.png";
import coc from "../../../public/assets/images/coc_2.png";
import t from "../../../public/assets/images/t.png";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";



const Hero = () => {

  return (
    <section
      id="Hero"
      className=" h-auto grid md:grid-cols-2 p-44 bg-slate-900 pt-32 sm:pt-44 mainBg px-6 py-24g pb-44 gap-5 sm:p-10 "
    >
      {/* hero description */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="flex flex-col justify-end md:justify-center mx-auto max-w-xl md:gap-6 md:h-[80%] z-0"
      >
        {/* arrow */}
        <Image
          alt="arrow"
          src={arrow}
          loading="lazy"
          className="hidden xl:flex absolute h-4n4 w-96n min-h-44 max-h-44 min-w-96 max-w-96 object-cover left-96 -top-24 z-40"
        />
        <h2 className=" text-2xl font-bold  md:text-5xl text-white">
          Bienvenue sur <br />
          <span className="text-6xl font-bold text-mainYellowColor">
            California Pub 
          </span>
        </h2>
        <p className="sm:text-2xl md:mt-4 md:block text-white">
          Notre engagement envers l'excellence transforme chaque projet en une
          expérience inoubliable. Commencez votre voyage vers l'excellence avec
          une consultation personnalisée dès aujourd'hui.
        </p>
        <div className="flex gap-4 mt-4 md:mt-8">
          <ScrollLink
            to="Services"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="inline-block text-center cursor-pointer rounded bg-mainYellowColor px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-300 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
          >
            Explorer Nos Services
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="inline-block text-center cursor-pointer rounded bg-mainYellowColorh px-6 py-3 text-sm font-bold text-mainYellowColor transition hover:bg-amber-300n focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
          >
            Contactez-nous Maintenant
          </ScrollLink>
        </div>
      </div>
      {/* machine image */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="relative hidden h-[90%] sm:flex rounded-2xl overflow-hidden shadow-gray-400 shadow-lg z-30"
      >
        <Image
          alt="machine cnc"
          src={img}
          loading="lazy"
          className="w-full h-auto object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
