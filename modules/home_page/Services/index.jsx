import React from "react";
import Link from "next/link";
import ServiceCard from "./_componets/index";
import Graveur_sur_bois from "@/public/assets/images/services/service-Graver-sur-bois.jpg";
import Cart_de_visite from "@/public/assets/images/services/service-Cart-de-visite.jpg";
import Découpe_laser from "@/public/assets/images/services/service-Decoupe-laser.jpg";
import Decoupe_vinyle from "@/public/assets/images/services/service-Decoupe-vinyle.jpg";
import Services_publicitaires from "@/public/assets/images/services/service-Services-publicitaires.jpg";
import Graver_sur_marble from "@/public/assets/images/services/service-Graver-sur-marble.jpg";
import Services_dimpression from "@/public/assets/images/services/service-Services-d'impression.jpg";
import Trophey_plexiglass from "@/public/assets/images/services/service-Trophey-plexiglass.jpg";
import Immatricolaion from "@/public/assets/images/services/service-Immatricolaion.jpg";



const Services = () => {
  // Tableau de données pour les services
  const servicesData = [
    {
      title: "Gravure sur bois",
      description:
        "Offrez une touche d'authenticité et d'élégance à vos projets avec notre service de gravure sur bois. Que ce soit pour des enseignes, des cadeaux personnalisés ou des décorations intérieures, notre expertise vous garantit des résultats remarquables.",
      image: Graveur_sur_bois,
      link: "/#contact",
    },
    {
      title: "Gravure sur marbre",
      description:
        "Ajoutez une dimension luxueuse à vos produits avec notre service de gravure sur marbre. Idéal pour les plaques commémoratives, les trophées ou les objets de décoration, cette technique apporte une touche sophistiquée à votre projet.",
      image: Graver_sur_marble,
      link: "/#contact",
    },
    {
      title: "Découpe laser et CNC router",
      description:
        "Profitez de notre technologie de pointe pour réaliser des découpes précises et complexes sur une variété de matériaux. Que ce soit pour des prototypes, des maquettes ou des pièces finales, notre équipement garantit une qualité exceptionnelle.",
      image: Découpe_laser,
      link: "/#contact",
    },
    {
      title: "Découpe vinyl",
      description:
        "Exprimez votre créativité avec notre service de découpe vinyl. Idéal pour les enseignes, les autocollants ou les décorations murales, cette technique offre une grande flexibilité pour des designs uniques et accrocheurs.",
      image: Decoupe_vinyle,
      link: "/#contact",
    },
    {
      title: "Services publicitaires",
      description:
        "Boostez votre visibilité avec nos services publicitaires sur mesure. De la conception de campagnes à la gestion des médias sociaux, nous vous aidons à atteindre votre public cible et à susciter l'engagement.",
      image: Services_publicitaires,
      link: "/#contact",
    },
    {
      title: "Services d'impression",
      description:
        "Faites impression avec nos services d'impression de haute qualité. Que ce soit pour des affiches, des brochures, des cartes de visite ou des bannières, notre équipement de pointe garantit des résultats professionnels à chaque fois.",
      image: Services_dimpression,
      link: "/#contact",
    },
    {
      title: "Trophées en plexiglass",
      description:
        "Le plexiglass offre de grandes possibilités pour la réalisation de trophées. Cette matière est largement utilisée pour des trophées dont la forme doit être adaptée grâce à une découpe laser. Transparent ou en couleur, d'épaisseurs différentes, le plexiglass garantit des trophées élégants et durables.",
      image: Trophey_plexiglass,
      link: "/#contact",
    },
    {
      title: "Cartes de visite",
      description:
        "Faites une bonne première impression avec nos cartes de visite professionnelles et personnalisées. Avec une variété de styles, de finitions et d'options de conception, nous vous aidons à vous démarquer dans le monde des affaires.",
      image: Cart_de_visite,
      link: "/#contact",
    },

    {
      title: "Plaque D'immatriculation",
      description:
        "Nous vous offrons un service de fabrication professionnel de plaques d'immatriculation pour tous types de véhicules, avec une gamme étendue de matériaux et de designs personnalisés, garantissant des produits conformes aux normes et répondant à vos besoins spécifiques",
      image: Immatricolaion,
      link: "/#contact",
    },
  ];

  return (
    <section id="Services" className="bg-gray-900 text-white secBg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services Offerts</h2>
          {/* <p className="mt-4 text- text-xl">
            Découvrez notre large gamme de services, allant de la gravure sur
            bois aux campagnes numériques. Nous proposons des solutions adaptées
            à tous vos besoins en impression, publicité et découpe.
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8  md:grid-cols-2 lg:grid-cols-3">
          {/* Mapper à travers les données des services et utiliser le composant ServiceCard */}
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="mt-8 inline-block rounded bg-mainYellowColor px-12 py-3 md:text-lg font-medium text-black transition hover:bg-amber-300 focus:outline-none focus:ring hover:scale-105 duration-300 focus:ring-red-700"
          >
            Démarrer maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
