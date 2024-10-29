import React from "react";

export const ExploreLocation = ({ image, city, desc, index }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/assets/images/explore/${image}-${
            index + 1
          }.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" group w-full cursor-pointer md:w-[380px] rounded-md h-[250px] flex items-center justify-center"
      >
        <div className="flex  group-hover:bg-transparent transition-all duration-200    bg-black/30 h-[90%] hover:px-2  rounded-md w-[90%] mx-auto my-auto flex-col justify-center content-center items-center   text-white text-center">
          <h1 className=" text-[18px] group-hover:bg-black/30 mb-2 font-medium capitalize">
            {city}
          </h1>
          <ul className="flex">
            {desc.map((item, index) => (
              <li
                key={index}
                className="mx-3  group-hover:bg-black/40  rounded-md  text-white text-[14px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
