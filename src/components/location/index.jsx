 import React from "react";

export const ExploreLocation = ({ image, city, desc, index }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/assets/images/explore/${image}-${index + 1}.png)`,
          backgroundSize: 'cover',  
          backgroundPosition: 'center',
        }}
        className="w-[380px] rounded-md h-[250px] flex items-center justify-center"
      >
        <div className="flex bg-black/30 h-[90%] rounded-md w-[90%] mx-auto my-auto flex-col justify-center content-center items-center text-white text-center">
          <h1 className=" text-[18px] font-medium capitalize">{city}</h1>
          <ul className="flex">
            {desc.map((item, index) => (
              <li key={index} className="mx-3  text-white text-[14px]">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
