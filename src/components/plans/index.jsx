import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

export const PricingPlans = ({ title, price, duration, features }) => {
  return (
    <div>
      <div className="  w-full md:w-[400px] rounded-md shadow-2xl bg-white text-black">
        <div className=" pt-5 flex flex-col items-center">
          <div
            className={`${title === "Pro" ? "block md:hidden lg:block" : "hidden"}   mb-5 text-sm`}
          >
            <div className=" px-5 py-3  rounded-full bg-[#ff6922] text-white font-bold">
              Best Value
            </div>
          </div>
          <span className=" text-[18px] md:text-[22px]  font-bold">{title}</span>
          <span className="">
            <span className=" text-[30px] font-medium">$</span>
            <span className="  text-[40px] md:text-[60px] ml-1 font-bold">{price}</span>
            
          </span>
          <span>{duration}</span>
        </div>
        <div>
          <ul className=" mt-5">
            {features?.map((item, index) => (
              <li className="  flex items-center mb-6 px-5" key={index}>
                <span
                  className={`${
                    item.available
                      ? " bg-[#E5F5EC] text-primary p-1 rounded-full"
                      : " bg-[#FBE6E8] p-1 text-[#E25348] rounded-full "
                  }`}
                >
                  {item.available ? <DoneIcon /> : <ClearIcon />}
                </span>
                <span className=" pl-5">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="   px-5  py-7">
          <div className=" text-[20px] font-medium  text-primary hover:text-white hover:bg-primary hover:border-none transition-all duration-300 text-center py-5  border-[#E5F5EC] border-[5px] rounded-full">
            start {title}
          </div>
        </div>
      </div>
    </div>
  );
};
