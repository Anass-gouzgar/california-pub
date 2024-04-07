'use client';



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
    question: "Quelle est la durée de production pour un projet de publicité?",
    answer:
      "La durée de production pour un projet de publicité peut varier en fonction de la complexité du design, du type de matériau utilisé, et de la quantité de produits commandés. Nous travaillons pour fournir des délais de production compétitifs tout en maintenant la qualité de nos produits.",
  },
];


  return (
    <div className="flex flex-col w-full mx-auto justify-center dark:bg-slate-900 p-6 pt-14 secBg">
      <h1 className="text-center md:text-4xl text-3xl font-bold text-black dark:text-white">
        FAQ
      </h1>
      <div className="w-full md:w-1/2 md:p-10 p-2 flex flex-col gap-3 mx-auto">
        {/* Map through the FAQ data */}
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-700 dark:text-white">
              <h2 className="font-medium">{faq.question}</h2>
              <svg
                className="size-5 shrink-0 transition duration-1000 group-open:-rotate-180"
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
            <p className="mt-4 p-4 leading-relaxed text-gray-700 dark:text-gray-200 transition duration-[3000] border border-mainYellowColor rounded-xl bg-slate ">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Index;
