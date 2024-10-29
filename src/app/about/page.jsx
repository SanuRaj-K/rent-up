import { SectionHeaders } from "@/components/section-headers";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <section className="  ">
        <div>
          <SectionHeaders
            desc={"About Us - Who We Are?"}
            title={"About Us"}
            image={"about-main.jpg"}
          />
        </div>
      </section> */}
      <section>
        <div className=" flex justify-between">
          <div >
            <div>
              <h1>Our Agency Story</h1>
              <h3>Check out our company story and work process</h3>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </span>
            </div>
            <div>
              <div>More About Us</div>
            </div>
          </div>
          <div className=" ">
            <Image
              src={"/assets/images/pages/about-main.jpg"}
              alt="about"
               width={600}
               height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
