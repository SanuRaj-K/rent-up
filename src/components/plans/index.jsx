import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

export const PricingPlans = ({ title, price, duration, features }) => {
  return (
    <div>
      <div className=" w-[400px] rounded-md shadow-2xl bg-white text-black">
        <div className=" pt-5 flex flex-col items-center">
          <span className=" text-[22px]  font-bold">{title}</span>
          <span className=" text-[60px] font-bold">{price}</span> 
          <span>{duration}</span>
        </div>
        <div>
          <ul>
            {features?.map((item, index) => (
              <li className=" mb-3 px-5"  key={index}>
                <span>
                  {item.avalilabe === "false" ? <DoneIcon /> : <ClearIcon />}
                </span>
                <span className=" pl-5">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div >start {title}</div>
        </div>
      </div>
    </div>
  );
};
