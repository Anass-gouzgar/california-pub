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
      className="grid h-auto gap-5 px-6 pt-32 md:grid-cols-2 p-44 bg-slate-900 sm:pt-44 mainBg py-24g pb-44 sm:p-10"
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
          className="absolute z-40 hidden object-cover xl:flex h-4n4 w-96n min-h-44 max-h-44 min-w-96 max-w-96 left-96 -top-24"
        />
        <h2 className="text-2xl font-bold text-white md:text-5xl">
          Bienvenue sur <br />
          <span className="text-6xl font-bold text-mainYellowColor">
            California Pub
          </span>
        </h2>
        <p className="text-white sm:text-2xl md:mt-4 md:block">
          Notre engagement envers l'excellence transforme chaque projet en une
          expérience inoubliable. Commencez votre voyage vers l'excellence avec
          une consultation personnalisée dès aujourd'hui.
        </p>
        <div className="relative flex gap-4 mt-4 md:mt-8">
          <ScrollLink
            to="Services"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="inline-block px-6 py-3 text-sm font-bold text-center text-black transition duration-300 ease-in-out rounded cursor-pointer bg-mainYellowColor hover:bg-amber-300 hover:motion-preset-flomoji-👉n focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 "
            //   className="inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium text-slate-200 dark:text-slate-800 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 dark:hover:bg-slate-100 shadow focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          >
            Explorer Nos Services
          </ScrollLink>
          <div class="hidden lg:block absolute left-48 -top-1 -translate-y-1/2 motion-rotate-loop-45 motion-duration-1000 motion-delay-500 motion-ease-bounce">
            🔨
          </div>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="inline-block px-6 py-3 text-sm font-bold text-center transition duration-300 ease-in-out rounded cursor-pointer bg-mainYellowColorh text-mainYellowColor hover:bg-amber-300n focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 hover:motion-preset-flomoji-🚀"
          >
            Contactez-nous Maintenant
          </ScrollLink>
        </div>
      </div>
      {/* machine image */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="relative hidden h-[90%] sm:flex rounded-2xl overflow-hidden shadow-gray-400 shadow-md z-30"
      >
        <Image
          alt="machine cnc"
          src={img}
          loading="lazy"
          className="object-cover w-full h-auto "
        />
      </div>
    </section>
  );
};

export default Hero;
