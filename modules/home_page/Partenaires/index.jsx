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
    <section className="flex flex-col items-center justify-center gap-16 bg-gray-900 p-14 partBg">
      {/* title */}
      <h1 className="w-full text-3xl font-bold text-center text-white md:text-4xl">
        Partenaires
      </h1>
      {/* logos */}
      <div
        data-aos="zoom-out-up"
        className="flex items-center justify-center w-full md:max-w-[1000px]"
      >
        <Marquee speed={50} pauseOnHover={false}>
          {Images.map((image, i) => (
            <div key={i} className="p-2 mr-6 md:mr-14">
              <Image
                src={image}
                alt={`logo-${i}`}
                className="object-contain w-[200px] h-[60px] grayscale hover:cursor-pointer hover:scale-110 duration-700 ease-in-out"
              />

              {/* Add a divider after each image except the last one */}

              <div className="w-1/2 h-1 mx-auto my-4 rounded-full bg-mainYellowColor"></div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default index;
