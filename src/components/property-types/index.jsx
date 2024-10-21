import Image from "next/image";
import React from "react";

export const PropertyTypes = ({ image, title, sub }) => {
  return (
    <div>
      <div className=" shadow-lg w-[220px] h-[190px] content-center justify-center rounded-md flex flex-col items-center">
        <Image
          src={`/assets/icons/${image}`}
          alt={title}
          height={60}
          width={60}
        />
        <h1 className="  font-medium capitalize py-2 text-[16px]">{title}</h1>
        <h2 className=" text-[14px] text-[#2d3954]">{sub} Property</h2>
      </div>
    </div>
  );
};
