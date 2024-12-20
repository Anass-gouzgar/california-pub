"use client";

import React from "react";

const Index = () => {
  const faqs = [
    {
      question: "Quels sont les différents services d'impression disponibles?",
      answer:
        "Nous offrons une variété de services d'impression, y compris l'impression numérique, l'impression sur tissu, et l'impression sur métal. Chaque service est conçu pour répondre à des besoins spécifiques, que ce soit pour des projets personnalisés ou des produits en masse.",
    },
    {
      question:
        "Quels sont les avantages de l'utilisation de la découpe laser pour les projets de publicité?",
      answer:
        "La découpe laser offre plusieurs avantages pour les projets de publicité, notamment une précision élevée, une capacité à traiter une grande variété de matériaux, et la possibilité de créer des designs complexes avec des détails fins. Cela permet de créer des supports publicitaires uniques et impressionnants.",
    },
    {
      question:
        "Comment le CNC Router est-il utilisé dans la production de publicités?",
      answer:
        "Le CNC Router est utilisé pour la production de publicités en permettant la découpe précise de matériaux tels que le bois, le métal, et le plastique. Cela permet de créer des supports publicitaires personnalisés avec des formes complexes et des motifs détaillés, idéaux pour des campagnes publicitaires ciblées.",
    },
    {
      question:
        "Quels types de matériaux peuvent être utilisés pour l'impression et la découpe laser?",
      answer:
        "Nous pouvons travailler avec une large gamme de matériaux pour l'impression et la découpe laser, y compris le bois, le métal, le plastique, et le tissu. Chaque matériau offre des propriétés uniques qui le rendent idéal pour différents types de projets.",
    },
    {
      question:
        "Quelle est la durée de production pour un projet de publicité?",
      answer:
        "La durée de production pour un projet de publicité peut varier en fonction de la complexité du design, du type de matériau utilisé, et de la quantité de produits commandés. Nous travaillons pour fournir des délais de production compétitifs tout en maintenant la qualité de nos produits.",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full p-6 mx-auto bg-slate-900 pt-14 secBg">
      {" "}
      <h1 className="text-3xl font-bold text-center text-white md:text-4xl">
        FAQ
      </h1>
      <div className="flex flex-col w-full gap-3 p-2 mx-auto md:w-1/2 md:p-10">
        {/* Map through the FAQ data */}
        {faqs.map((faq, index) => (
          <details
            data-aos="zoom-in-left"
            key={index}
            open={index === 0} // Open the first question by default
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-gray-700 text-white">
              <h2 className="font-medium">{faq.question}</h2>
              <svg
                className="transition duration-1000 size-5 shrink-0 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 p-4 leading-relaxed text-gray-200 transition duration-[3000] border border-mainYellowColor rounded-xl bg-slate ">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Index;
