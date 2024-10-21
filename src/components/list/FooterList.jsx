import React from "react";

export const FooterList = ({ content, title }) => {
  return (
    <div>
      <div>
        <h1 className=" font-medium uppercase text-white text-[18px]">{title}</h1>

        <ul className=" mt-7">
          {content?.map((item, index) => (
            <li
              className=" cursor-pointer text-[#808080] capitalize mb-4 text-[16px]"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
