import React from "react";
import Link from "next/link";
import ServiceCard from "./_componets/index";

const Services = () => {
  // Tableau de données pour les services
  const servicesData = [
    {
      title: "Campagnes numériques",
      description:
        "Propulsez votre présence en ligne avec nos campagnes numériques innovantes. De la conception à l'exécution, nous maximisons votre visibilité et votre impact sur les plateformes numériques.",
      image:"https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Gravure sur bois",
      description:
        "Offrez une touche d'authenticité et d'élégance à vos projets avec notre service de gravure sur bois. Que ce soit pour des enseignes, des cadeaux personnalisés ou des décorations intérieures, notre expertise vous garantit des résultats remarquables.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Gravure sur marbre",
      description:
        "Ajoutez une dimension luxueuse à vos produits avec notre service de gravure sur marbre. Idéal pour les plaques commémoratives, les trophées ou les objets de décoration, cette technique apporte une touche sophistiquée à votre projet.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Découpe laser et CNC router",
      description:
        "Profitez de notre technologie de pointe pour réaliser des découpes précises et complexes sur une variété de matériaux. Que ce soit pour des prototypes, des maquettes ou des pièces finales, notre équipement garantit une qualité exceptionnelle.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Découpe vinyl",
      description:
        "Exprimez votre créativité avec notre service de découpe vinyl. Idéal pour les enseignes, les autocollants ou les décorations murales, cette technique offre une grande flexibilité pour des designs uniques et accrocheurs.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Services publicitaires",
      description:
        "Boostez votre visibilité avec nos services publicitaires sur mesure. De la conception de campagnes à la gestion des médias sociaux, nous vous aidons à atteindre votre public cible et à susciter l'engagement.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Services d'impression",
      description:
        "Faites impression avec nos services d'impression de haute qualité. Que ce soit pour des affiches, des brochures, des cartes de visite ou des bannières, notre équipement de pointe garantit des résultats professionnels à chaque fois.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Trophées en plexiglass",
      description:
        "Le plexiglass offre de grandes possibilités pour la réalisation de trophées. Cette matière est largement utilisée pour des trophées dont la forme doit être adaptée grâce à une découpe laser. Transparent ou en couleur, d'épaisseurs différentes, le plexiglass garantit des trophées élégants et durables.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
    {
      title: "Cartes de visite",
      description:
        "Faites une bonne première impression avec nos cartes de visite professionnelles et personnalisées. Avec une variété de styles, de finitions et d'options de conception, nous vous aidons à vous démarquer dans le monde des affaires.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-900 text-white secBg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services Offerts</h2>
          <p className="mt-4 text- text-xl">
            Découvrez notre large gamme de services, allant de la gravure sur
            bois aux campagnes numériques. Nous proposons des solutions adaptées
            à tous vos besoins en impression, publicité et découpe.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            className="mt-8 inline-block rounded bg-mainYellowColor px-12 py-3 text-sm font-medium dark:text-black transition hover:bg-amber-300 focus:outline-none focus:ring hover:scale-105 duration-300 focus:ring-red-700"
          >
            Démarrer maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
