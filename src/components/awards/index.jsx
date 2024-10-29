import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const Award = ({ title, sub, icon: Icon }) => {
  return (
    <div className=" w-full flex flex-col items-center">
      <div className=" bg-[#2A3F5A] p-10   rounded-tr-[50%] rounded-bl-[50%]">
        {Icon && <Icon style={{ fontSize: 40 }} />}
      </div>
      <div className="   text-center">
        <h1 className="  text-[24px] md:text-[36px] lg:text-[50px] font-bold">
          {title}
        </h1>
        <h3 className=" text-[#808080]">{sub}</h3>
      </div>
    </div>
  );
};
