import ContactBottom from "@/components/contact/ContactBottom";
import { PropertyTypes } from "@/components/property-types";
import { SectionHeaders } from "@/components/section-headers";
import { properties } from "@/constants";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="  ">
        <div>
          <SectionHeaders
            desc={"Services -All Services"}
            title={"Services"}
            image={"services-bg.jpg"}
          />
        </div>
      </section>
      <section>
        <ul className=" grid md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-x-5 xl:grid-cols-5  py-10 place-items-center max-w-[80%] mx-auto  gap-x-0">
          {properties.map((item, index) => (
            <li key={index}>
              <PropertyTypes
                image={item.icon}
                sub={item.sub}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ContactBottom />
      </section>
    </div>
  );
};

export default Services;
