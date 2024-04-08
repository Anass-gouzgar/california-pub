import Image from "next/image";

const Card = ({ title, img, hoverImg }) => {
  return (
    <div className=" group md:w-[80%] w-[100%] md:gap-x-6 mgx-auto block md:overflow-hidden rounded-2xl md:mr-8 ">
      {/* images */}
      <div className="relative h-[200px] w-full sm:h-[200px] rounded-lg ">
        <Image
          src={img}
          height={70}
          width={70}
          alt="image"
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <Image
          src={hoverImg}
          height={70}
          width={70}
          alt="image 2"
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      {/* text */}
      <div className="relative text-center bg-white p-3 rounnded-lg">
        <h3 className="text-lg font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>

      </div>
    </div>
  );
};

export default Card;
