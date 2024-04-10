'use client';
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "California Pub",
  description:
    "Notre engagement envers l'excellence transforme chaque projet en une expérience inoubliable. Commencez votre voyage vers l'excellence avec une consultation personnalisée dès aujourd'hui.",
  icon: "/icon.ico",
  ogImage: "../../public/assets/images/og-logo.jpg",
  ogUrl: "https://californiapublicite.ma",
};

export default function RootLayout({ children }) { useEffect(() => {
   AOS.init({
     duration: 800,
     once: false,
   });
 }, []);
  return (
    <html lang="fr">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content="website" />
        <Link rel="icon" href={metadata.icon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
