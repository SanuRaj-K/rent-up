import Image from "next/image";
import React from "react";

export const SectionHeaders = ({ image, title, desc }) => {
  return (
    <div>
      <section className="relative">
        <div className=" w-full h-[250px]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          <Image
            src={`/assets/images/pages/${image}`}
            layout="fill"
            objectFit="cover"
            alt="bg"
          />
        </div>{" "}
        <div className=" text-white text-center md:text-start z-40 md:left-[150px] absolute top-[100px]">
          <h3 className=" text-[16px] mb-3">{title}</h3>
          <h1 className="  text-[30px] ml-10 md:ml-0 md:text-[40px] font-medium">{desc}</h1>
        </div>
      </section>
      <section></section>
    </div>
  );
};
