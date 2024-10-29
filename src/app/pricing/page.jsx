import ContactBottom from "@/components/contact/ContactBottom";
import { PricingPlans } from "@/components/plans";
import { SectionHeaders } from "@/components/section-headers";
import { pricingPlans } from "@/constants";
import React from "react";

const PricingPage = () => {
  return (
    <div>
      <section className="  ">
        <div>
          <SectionHeaders
            desc={"No Extra Fees. Friendly Support"}
            title={"30 days money back guarantee"}
            image={"pricing-bg.jpg"}
          />
        </div>
      </section>
      <section className=" py-20">
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10  lg:place-items-center">
          {pricingPlans?.map((item, index) => (
            <li key={index}>
              <PricingPlans
                duration={item.billingCycle}
                features={item.features}
                price={item.price}
                title={item.plan}
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

export default PricingPage;
