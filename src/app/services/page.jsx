
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
        <ul className=" px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 md:py-16 lg:place-items-center">
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
