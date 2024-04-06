import React from 'react'
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo1 from "@/public/assets/images/company1.png";
import logo2 from "@/public/assets/images/company2.png";
import logo3 from "@/public/assets/images/company3.png";
import logo4 from "@/public/assets/images/company4.png";



const index = () => {
    
    const Images = [logo1, logo2, logo3, logo4];

  return (
    <section className="flex flex-col justify-center items-center gap-16 dark:bg-gray-900 bg-gray-600 p-14">
      {/* title */}
      <h1 className="md:text-4xl text-3xl text-center font-bold w-full text-white">Nos Partenaires</h1>
      {/* logos */}
      <div className="flex items-center justify-center w-full md:max-w-[1000px]">
        <Marquee speed={50} pauseOnHover={false}>
          {Images.map((image, i) => (
            <div key={i} className="mr-16 p-2">
              <Image
                src={image}
                alt={`logo-${i}`}
                className="object-contain w-[200px] h-[60px] grayscale hover:cursor-pointer hover:scale-110 duration-700 ease-in-out"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default index