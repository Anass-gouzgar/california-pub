import React from "react";
import Image from "next/image";
import Link from "next/link";


const ServiceCard = ({ title, description, image, link }) => {
  return (
    <article className="relative overflow-hidden rounded-lg hover:shadow-lg shadow-xl transition hover:border-slate-500 hover:shadow-amber-300">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 hover:opacity-25 transition-opacity duration-100"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <h3 className="text-2xl text-white font-bold mt-0.5">{title}</h3>

          <p className="mt-2 line-clamp-3 text-lg/relaxed font-semibold text-white/95">
            {description}
          </p>
          <Link
            href={link}
            class="group mt-4 inline-flex items-center gap-1 hover:scale-125 text-sm font-medium text-mainYellowColor"
          >
            En savoir plus
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
