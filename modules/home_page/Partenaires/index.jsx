import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo1 from "@/public/assets/images/company-1.jpg";
import logo2 from "@/public/assets/images/company-2.png";
import logo3 from "@/public/assets/images/company-3.jpg";
import logo4 from "@/public/assets/images/company-4.jpg";
import logo5 from "@/public/assets/images/company-5.jpg";
import logo6 from "@/public/assets/images/company-6.jpg";

const index = () => {
  const Images = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="flex flex-col justify-center items-center gap-16 dark:bg-gray-900 bg-gray-600 p-14">
      {/* title */}
      <h1 className="md:text-4xl text-3xl text-center font-bold w-full text-white">
        Nos Partenaires
      </h1>
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

              {/* Add a divider after each image except the last one */}

              <div className="h-1 bg-mainYellowColor w-1/2 mx-auto my-4 rounded-full"></div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default index;
