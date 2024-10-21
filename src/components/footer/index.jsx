import Image from "next/image";
import React from "react";
import { FooterList } from "../list/FooterList";
import { allSections, company, layouts } from "@/constants";

export const Footer = () => {
  return (
    <div className="bg-[#1d2636]">
      <section className="  py-10  fb flex-wrap  max-w-[80%] mx-auto ">
        <div className=" mb-10 lg:mb-0">
          <div>
            <Image
              src={"/assets/icons/logo-light.png"}
              alt="logo"
              height={40}
              width={140}
            />
            <h3 className=" text-white text-[24px] my-3">
              Do you need help with anything?
            </h3>
            <p className=" text-[#808080] pr-5">
              receive updates, hot deals, tutorials, discounts sent straight in
              your inbox enery month
            </p>
            <div className=" h-[50px] flex mt-4  ">
              <input
                type="text"
                name="mail"
                className=" w-[500px] rounded-md px-5 placeholder:text-black outline-none"
                placeholder="Email address"
                id="mail"
              />
              <button className=" bg-primary px-4 py-2 rounded-md text-white text-[14px] font-semibold h-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" grid  mt-10 grid-cols-2 md:grid-cols-3 lg:gap-14"> */}
          <div>
            <FooterList content={layouts} title={"layouts"} />
          </div>
          <div>
            <FooterList content={allSections} title={"all sections"} />
          </div>
          <div>
            <FooterList content={company} title={"company"} />
          </div>
        {/* </div> */}
      </section>
    </div>
  );
};
