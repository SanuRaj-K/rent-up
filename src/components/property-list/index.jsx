import Image from "next/image";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const PropertyList = ({ name, address, price, type, status, image }) => {
  return (
    <div>
      <div className=" shadow-xl px-5 cursor-pointer md:px-0 h-[470px] w-[380px]">
        <Image
          src={`/assets/images/property/${image}`}
          height={240}
          className=" object-cover"
          width={380}
          alt={image}
        />
        <div className=" px-2  mt-5 fb items-center">
          <span
            className={`${
              status.toLowerCase() === "for rent"
                ? "bg-[#FFF4E5] text-[#ff9800]"
                : " bg-[#E9F7F1] text-primary"
            }
            font-semibold text-[14px]  px-2 rounded-md `}
          >
            {status}
          </span>
          <span className=" text-[#bec7d8] ">
            <FavoriteIcon />
          </span>
        </div>
        <div className=" text-[14px] md:text-[16px] my-3 flex flex-col px-2">
          <span>{name}</span>
          <span className=" text-[#72809d] mt-2 flex items-center">
            <span>
              <LocationOnIcon />
            </span>
            <span>{address}</span>
          </span>
        </div>
        <div className=" py-4">
          <hr className=" " />
        </div>
        <div className=" fb items-center mt-5 px-2">
          <span className=" ">
            <span className="bg-primary px-5 py-3 rounded-3xl  text-sm  md:text-[20px] font-bold text-white">
              {price}
            </span>
            <span className=" text-[#2d3954] text-sm md:text-[16px] ml-1">
              /sqft
            </span>
          </span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};
