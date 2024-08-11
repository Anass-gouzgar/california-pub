"use client"
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link"; // Importez Link de Next.js

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClass = scrolling ? "bg-black/55 shadow-xl" : "";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation data
  const navLinks = [
    { name: "Acceuil", href: "Hero" },
    { name: "Services", href: "Services" },
    { name: "Matières premières ", href: "matières_premières" },
    { name: "Contact", href: "contact" },
    { name: "A propos", href: "à_propos" },
  ];

  return (
    <header
      className={`flex justify-center items-center mx-auto fixed top-0 left-0 right-0 z-10 ${headerClass}`}
    >
      <div className="px-4 mx-auto max-w-screhen-xl sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-10 my-3 bg-yegllow-500">
          {/* logo */}
          <div className="">
            <ScrollLink
               to="Hero"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={200}
                height={20}
                className="object-cover w-auto h-auto cursor-pointer"
              />
            </ScrollLink>
          </div>
          {/* navigation links */}
          <div className="hidden pt-3 md:block ">
            <nav aria-label="Global">
              <div className="flex items-center gap-6 text-lg">
                {navLinks.map((link, index) => (
                  <ScrollLink
                    key={index}
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="relative cursor-pointer text-gray-200 z-50 before:content-[''] before:absolute before:w-0 before:h-2 before:bg-mainYellowColor before:bottom-0 before:rounded-xl before:-z-10 hover:before:w-1/2 before:duration-300"
                  >
                    {link.name}
                  </ScrollLink>
                ))}
              </div>
            </nav>
          </div>
          {/* call to action : call */}
          <div className="flex items-center gap-4 pt-3">
            <div className="sm:flex sm:gap-4">
              <Link
                href="tel:+212768049725"
                className="block w-[110px] text-center rounded bg-mainYellowColor py-2 text-sm font-bold text-black transition hover:bg-amber-300 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
              >
                Appelle-nous
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white transition bg-gray-800 rounded hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="absolute right-0 w-[90%] h-screen bg-slate-900/90 shadow-lg">
            <nav className="flex flex-col items-center justify-center h-full gap-4 py-4 text-lg">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.href}
                  className="relative hover:cursor-wakit text-gray-500 hover:text-gray-500/75 z-50 before:content-[''] before:absolute before:w-0 before:h-2 before:bg-amber-500 before:bottom-0 before:rounded-xl before:-z-10 hover:before:w-1/2 before:duration-300"
                >
                  <button>
                                      {link.name}

                  </button>
                </ScrollLink>
              ))}
              <div className="sm:flex sm:gap-4">
                <Link
                  href="tel:+212768049725"
                  className="block w-[100px] text-center rounded bg-amber-500 py-2 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
                >
                  Appelle-nous
                </Link>
              </div>
            </nav>

            <button
              className="absolute text-white top-4 right-4 hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
