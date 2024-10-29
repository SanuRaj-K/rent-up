import ContactBottom from "@/components/contact/ContactBottom";
import { PropertyList } from "@/components/property-list";
import { SectionHeaders } from "@/components/section-headers";
import { propertiesList } from "@/constants";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <section className="  ">
        <div>
          <SectionHeaders
            desc={"Blog Grid - Our Blogs"}
            title={"Blog"}
            image={"about-main.jpg"}
          />
        </div>
      </section>
      <section className=" py-10">
        <ul className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-items-center gap-11">
          {propertiesList?.map((item, index) => (
            <li key={index}>
              <PropertyList
                address={item.address}
                image={item.image}
                name={item.name}
                price={item.price}
                status={item.status}
                type={item.type}
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

export default BlogsPage;
