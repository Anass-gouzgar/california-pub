
"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Card from "./_components/Card.jsx";

// icons
import chevronIcon from "../../../public/assets/images/chevron-right.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";




// import images

import Alucobond_1 from "../../../public/assets/images/Alucobond.jpeg";
import Bois_1 from "../../../public/assets/images/Bois.jpeg";
import Forex_1 from "../../../public/assets/images/Forex.jpeg";
import Plexiglass_1 from "../../../public/assets/images/Plexiglass.jpeg";
import Marbre_1 from "../../../public/assets/images/Marbre.jpeg";
import Neylon_1 from "../../../public/assets/images/Neylon.jpeg";
// hover imgs
import Alucobond_2 from "../../../public/assets/images/Alucobond-2.jpg";
import Bois_2 from "../../../public/assets/images/Bois-2.jpg";
import Forex_2 from "../../../public/assets/images/Forex-2.webp";
import Plexiglass_2 from "../../../public/assets/images/Plexiglass-2.webp";
import Marbre_2 from "../../../public/assets/images/Marbre-2.webp";
import Neylon_2 from "../../../public/assets/images/Neylon-2.jpg";


const cardsData = [
  {
    title: "Alucobond",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Alucobond_1,
    hoverImg: Alucobond_2,
  },
  {
    title: "Bois",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Bois_1,
    hoverImg: Bois_2,
  },
  {
    title: "Forex",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Forex_1,
    hoverImg: Forex_2,
  },
  {
    title: "Plexiglass",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Plexiglass_1,
    hoverImg: Plexiglass_2,
  },
  {
    title: "Marbe",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Marbre_1,
    hoverImg: Marbre_2,
  },
  {
    title: "Neylon",
    description:
      "« J’y suis allée aujourd’hui, et bien c’est un perfect, prise en charge immédiate, batterie changée en 20 minutes, accueil professionnel et accueillant, le lieu est plaisant et l’efficacité aussi. Je recommande vivement ! »",
    img: Neylon_1,
    hoverImg: Neylon_2,
  },
];

const RawMaterials = () => {
 const swiperRef = useRef(null);

 useEffect(() => {
   if (swiperRef.current) {
     swiperRef.current.swiper.autoplay.start();
   }
 }, []);
      const [swiper, setSwiper] = useState(null);


  return (
    <div
      id="matières_premières"
      className="bg-slate-900 flex flex-col items-center mx-auto relative sm:px-5 px-10 z-0"
    >
      {/* header */}
      <header className="text-center pt-5 md:mb-10 z-10 text-white">
        <div className="md:text-4xl text-3xl text-center font-bold w-full text-white">
          Matières premières
        </div>
      </header>

      {/* aside */}
      <div className="relative flex md:flex-row flex-col flex-nowrap w-full max-w-[1400px] z-10 bg-red-500l overflow-hidden">
        {/* text nd buttons */}
        <div
          data-aos="zoom-in-up"
          className="max-w-xli md:min-w-[60%] text-center md:text-start w-full flex flex-col gap-y-3 md:p-16 p-3 items-center md:items-start justify-center bg-blue-600l"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl hidden md:block">
            Expertise en Fabrication Multimatériaux pour des Produits de Haute
            Qualité{" "}
          </h2>

          <p className=" text-white ">
            Nous travaillons sur une variété de matières premières pour la
            fabrication, allant du bois aux métaux en passant par les matières
            plastiques. Grâce à notre polyvalence et notre précision, nous
            sommes en mesure de satisfaire pleinement nos clients en leur
            fournissant produits de haute qualité.
          </p>

          {/* nav buttons */}
          <div className="bg-yellow-300l flex gap-2 mx-auto md:mx-0 ">
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              onClick={() => swiper.slidePrev()}
              type="button"
              className=" min-w-[50px] min-h-[50px] size-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-90  hover:scale-110 "
            >
              <Image
                src={chevronIcon}
                className={`w-3 scale-x-[-1]`}
                alt="chevron"
              />
            </button>
            <button
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              onClick={() => swiper.slideNext()}
              type="button"
              className=" min-w-[50px] min-h-[50px] size-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-90 hover:scale-110"
            >
              <Image src={chevronIcon} className={`w-3`} alt="chevron" />
            </button>
          </div>
        </div>

        {/* slider */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="p-3 flex flex-cold justify-center items-center gap-20e bg-slate-800 md:w-[70%] rounded-2xl"
        >
          <Swiper
            spaceBetween={0}
            loop={true}
            modules={[Pagination]}
            // pagination={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            className="md:h-[550px] w-full rounded-lg "
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide
                key={index}
                className="mt-10f md:pt-32 bg-yellow-400l flex items-center justify-center"
              >
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.img}
                  hoverImg={card.hoverImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RawMaterials;