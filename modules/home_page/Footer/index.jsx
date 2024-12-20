"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/assets/images/footer_img.jpg";
import scrollTop from "@/public/assets/images/scroll-top-icon.svg";
import { Link as ScrollLink } from "react-scroll";


const Footer = () => {
  let currentYear = new Date().getFullYear();
  // services data
  const services = [
    "Services d'Impression",
    "Solutions Publicitaires",
    "Découpe Laser",
    "Routage CNC",
  ];

  return (
    <footer id="footer" className=" lg:grid lg:grid-cols-5 bg-slate-900">
      {/* img */}
      <div
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="relative block h-32 lg:col-span-2 lg:h-full"
      >
        <Image
          src={img}
          alt="footer img"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {/* sec col */}

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
          {/* first col */}
          <div className="flex flex-col ">
            <div className="flex flex-col gap-3">
              <span className="inldine text-lg uppercase tracking-wide text-mainYellowColor ">
                Appelle-Nous
              </span>

              <Link
                href="tel:+212768049725"
                className="flex gap-3 text-2xl font-medium hover:opacity-75 sm:text-3xl text-white "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-8 shrink-0 text-white text-gray hover:-translate-y-1 duration-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h2 className="hover:-translate-y-1 duration-300">
                  +212768049725
                </h2>
              </Link>
            </div>

            <div className="mt-8 space-y-1 text-sm text-gray-200">
              <h2>Lundi à Vendredi: 10:00 - 20:00</h2>
              <h2>Weekend: 10:00 - 18:00</h2>
            </div>
            {/* social media icons */}
            <div className="mt-8 flex gap-6  ">
              <Link
                href="https://www.facebook.com/profile.php?id=100069538042688&mibextid=eQY6cl"
                rel="noreferrer"
                target="_blank"
                className="hover:opacity-75 hover:-translate-y-1 duration-300 text-gray-200"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/california.pub5/"
                rel="noreferrer"
                target="_blank"
                className=" transition hover:opacity-75 text-gray-200 hover:-translate-y-1 duration-300"
              >
                <span className="sr-only">Instagram</span>

                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {/* sec two col */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
            {/* first col - services */}
            <div className="">
              <h1 className="text-lg font-bold text-white">
                Nos Services <br /> Principaux
              </h1>
              <div className="mt-6 space-y-4 text-sm flex flex-col justify-center">
                {services.map((service, index) => (
                  <ScrollLink
                    to="Services"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    key={index}
                    className=" transition hover:opacity-75 text-gray-200 hover:cursor-pointer"
                  >
                    {service}
                  </ScrollLink>
                ))}
              </div>
            </div>
            {/* sec col */}
            <div className=" flex flex-col">
              <p className="text-lg font-bold  text-white">
                À Propos de Notre Entreprise
              </p>

              <div className="mt-6 space-y-4 text-sm flex flex-col">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  className="cursor-pointer transition hover:opacity-75 text-gray-200"
                >
                  Contactez-Nous
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t  pt-12 ">
          <div className="flex flex-col gap-2 items-center justify-center">
            {/* go to top  */}
            <ScrollLink
              to="Hero"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <div className="bg-mainYellowColor p-1 mt-3 rounded-full w-10 h-10 text-center cursor-pointer flex justify-center items-cente  transition hover:opacity-75 hover:scale-100 duration-3y00">
                <Image
                  data-aos="zoom-in-up"
                  src={scrollTop}
                  alt="go to top"
                  width={16}
                  height={16}
                  className="text-white w-auto h-auto"
                />
              </div>
            </ScrollLink>
            <p className="mt-8 text-sm sm:mt-0 text-gray-400">
              &copy; {currentYear}. California Pub. Tous droits réservés.
            </p>
            <p className="mt-8 text-sm sm:mt-0 text-slate-400 hover:text-mainYellowColor">
              By{" "}
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B212606967994&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Anass GOUZGAR{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
