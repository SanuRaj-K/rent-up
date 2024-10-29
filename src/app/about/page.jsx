import ContactBottom from "@/components/contact/ContactBottom";
import { SectionHeaders } from "@/components/section-headers";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <section className="  ">
        <div>
          <SectionHeaders
            desc={"About Us - Who We Are?"}
            title={"About Us"}
            image={"about-main.jpg"}
          />
        </div>
      </section>
      <section>
        <div className=" w-full flex  py-10 px-5 md:px-10 lg:px-20 flex-col lg:flex-row lg:justify-between">
          <div className=" w-full lg:w-1/2">
            <div className=" md:text-center lg:text-start">
              <h1 className=" text-[#2d3954] font-semibold text-[35px]">
                Our Agency Story
              </h1>
              <h3 className=" text-[#73809d]">
                Check out our company story and work process
              </h3>
            </div>
            <div className=" mt-10 text-sm  leading-[36px] max-w-[90%] flex flex-col">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <span className=" mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </span>
            </div>
            <div className=" flex md:justify-center lg:justify-normal">
              <div className="  text-white bg-primary px-5 py-3 rounded-full inline-block mt-5 font-semibold">
                <div>More About Us</div>
              </div>
            </div>
          </div>
          <div className=" rounded-md flex md:justify-center lg:justify-normal  w-full lg:w-1/2 ">
            <Image
              src={"/assets/images/pages/about-main.jpg"}
              alt="about"
              className="  p-5"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
      <section>
        <ContactBottom />
      </section>
    </div>
  );
};

export default About;
