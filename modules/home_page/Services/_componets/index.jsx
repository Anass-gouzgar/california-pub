import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";



const ServiceCard = ({ title, description, image, link }) => {
  return (
    <article
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="group h-auto relative overflow-hidden bg-black rounded-lg hover:shadow-lg shadow-xl transition hover:border-slate-500 hover:shadow-amber-300"
    >

      <Image
        src={image}
        alt={title}
        layout="fill"
        loading="lazy"
        sizes="50vw"
        className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className=" h-full relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <h3 className="text-2xl text-white font-bold mt-0.5">{title}</h3>

          <p className="mt-2 line-clamp-3 yhover:line-clamp-none text-lg/relaxed font-semibold text-white/95">
            {description}
          </p>
          <ScrollLink
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            data-aos="zoom-in-up"
            to={link}
            className=" cursor-pointer group mt-4 inline-flex items-center gap-1 hover:scale-125 text-sm font-medium text-mainYellowColor"
          >
            En savoir plus
            <span
              aria-hidden="true"
              className="block group-hover:ms-0.5 group-hover:rotate-[360deg] transition-all duration-300 rtl:rotate-180"
            >
              &rarr;
            </span>
          </ScrollLink>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
