"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    { name: "Acceuil", href: "#" },
    { name: "A propos", href: "#" },
    { name: "Catalogue", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`flex justify-center items-center mx-auto fixed top-0 left-0 right-0 z-10 ${headerClass}`}
    >
      <div className="mx-auto max-w-screhen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-10  my-3 bg-yegllow-500">
          {/* logo */}
          <div className="">
            <Link href="/" className="block">
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={300}
                height={20}
              />
            </Link>
          </div>
          {/* navigation links */}
          <div className="hidden md:block pt-3 ">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="relative text-gray-200 z-50 before:content-[''] before:absolute before:w-0 before:h-2 before:bg-mainYellowColor before:bottom-0 before:rounded-xl before:-z-10 hover:before:w-1/2 before:duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* call to action : call */}
          <div className="flex items-center gap-4 pt-3">
            <div className="sm:flex sm:gap-4">
              <Link
                href="tel:+212768049725"
                className="block w-[100px] text-center rounded bg-mainYellowColor py-2 text-sm font-bold text-black transition hover:bg-amber-600 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out"
              >
                Appelle-nous
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 w-[90%] h-screen bg-slate-900/90 shadow-lg">
            <nav className="text-lg flex flex-col items-center justify-center h-full gap-4 py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="relative text-gray-500 hover:text-gray-500/75 z-50 before:content-[''] before:absolute before:w-0 before:h-2 before:bg-amber-500 before:bottom-0 before:rounded-xl before:-z-10 hover:before:w-1/2 before:duration-300"
                >
                  {link.name}
                </Link>
              ))}{" "}
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
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
