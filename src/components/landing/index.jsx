"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  agents,
  awards,
  exploreLocation,
  pricingPlans,
  properties,
  propertiesList,
} from "@/constants";
import { PropertyTypes } from "../property-types";
import { PropertyList } from "../property-list";
import { Award } from "../awards";
import { ExploreLocation } from "../location";
import { Agents } from "../agent";
import { PricingPlans } from "../plans";
import ContactBottom from "../contact/ContactBottom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export const LandingPage = () => {
  return (
    <div className=" overflow-hidden">
      <section className=" overflow-hidden pb-36 min-h-screen w-full bg-landing bg-cover bg-no-repeat">
        <div className="flex px-5 lg:px-0  flex-col justify-center items-center h-screen">
          <h1 className="  text-[46px] md:text-[60px] capitalize  text-white font-semibold">
            search your next home
          </h1>
          <h3 className=" text-white text-sm  md:text-[16px]">
            find new & featured property located in your local city
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" px-5 py-5 md:my-3   flex  md:flex-row md:justify-between flex-col min-w-[80%] mt-10 rounded-sm bg-white"
          >
            <div className="  flex flex-col">
              <label className=" text-[#808080] text-[16px]" htmlFor="city">
                city/street
              </label>
              <input
                className=" border-2 mt-2 pl-2 placeholder:text-black  rounded-md py-1"
                type="text"
                placeholder="Location"
                name="city"
                id="city"
              />
            </div>
            <div className=" mt-5 md:mt-0 flex flex-col">
              <label className=" text-[#808080] text-[16px]" htmlFor="property">
                property type
              </label>
              <input
                className=" border-2 mt-2 pl-2 placeholder:text-black  rounded-md py-1"
                type="text"
                placeholder="Property Type"
                name="property"
                id="property"
              />
            </div>
            <div className=" mt-5 md:mt-0 flex flex-col">
              <label className=" text-[#808080] text-[16px]" htmlFor="range">
                price Range
              </label>
              <input
                className=" border-2 mt-2 pl-2 placeholder:text-black rounded-md py-1"
                type="text"
                placeholder="Price Range"
                name="range"
                id="range"
              />
            </div>
            <div
              onClick={() => toast.error("Available Soon...!")}
              className=" flex flex-col md:flex-row mt-5 items-center"
            >
              <span className=" font-semibold  text-black">
                Advanced filter
              </span>
              <div className="  cursor-pointer bg-primary px-4 py-3 rounded-md ml-3  text-white">
                <SearchIcon />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className=" px-10 md:px-0 py-20 bg-[#f7f9fc]">
        <div className=" flex flex-col  items-center w-full mx-auto">
          <h1 className=" text-[26px] text-center md:text-start md:text-[35px] font-semibold">
            Featured Property Types
          </h1>
          <h3 className=" text-[#72809d] text-[16px] mt-3 md:mt-0 md:text-[20px]">
            Find All Type Property.
          </h3>
        </div>

        <ul className="  px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 md:py-16 lg:place-items-center gap-4">
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
      <section className=" py-20">
        <div className=" text-center  py-16   w-full">
          <h1 className=" text-[26px] md:text-[35px]   font-semibold capitalize text-[#2d3954]">
            Recent properties listed
          </h1>
          <p className="  text-[#72809d] mt-3 md:mt-0  text-[14px] md:text-[16px] max-w-[700px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <ul className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  place-items-center gap-11">
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
      <section className=" bg-[#122947] text-white py-20 ">
        <div className="lg:max-w-[80%] w-full md:mx-auto">
          <div className=" text-center">
            <h1 className=" text-primary   capitalize ">our awards</h1>
            <p className=" text-[24px] md:text-[30px] max-w-[700px] mx-auto">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </p>
          </div>
          <ul className=" mt-10  flex justify-center flex-wrap">
            {awards?.map((item, index) => {
              const IconComp = item.icon;
              return (
                <li className="mb-5 mx-10 md:mb-0" key={index}>
                  <Award title={item.title} sub={item.sub} icon={IconComp} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className=" px-5 lg:px-0 py-20">
        <div className=" text-center">
          <h1 className=" text-black text-[26px] md:text-[35px] font-semibold">
            Explore By Location
          </h1>
          <h3 className=" max-w-[700px] mt-5 md:mt-0 text-[14px] md:text-[16px] mx-auto py-03 text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </h3>
        </div>
        <motion.div
        className=" overflow-hidden"
          transition={{ duration: 1 }}
          viewport={false}
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
        >
          <ul className=" grid    px-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:place-items-center gap-5">
            {exploreLocation?.map((item, index) => (
              <li key={index}>
                <ExploreLocation
                  index={index}
                  image={item.image}
                  city={item.title}
                  desc={item.desc}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
      <section className=" px-5 bg-[#f7f9fc] md:px-0">
        <div className=" py-20">
          <div className=" text-center">
            <h1 className=" text-[#2d3954] text-[20px] sm:text-[28px] md:text-[35px] capitalize font-semibold">
              Our featured agents
            </h1>
            <p className=" text-[#72809d] text-[14px] md:text-[16px] max-w-[700px] mx-auto my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <motion.div
         className=" overflow-x-hidden"
            transition={{ duration: 1 }}
            viewport={false}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
          >
            <ul className="  mt-9  grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 gap-x-5">
              {agents?.map((item, index) => (
                <li key={index}>
                  <Agents
                    image={item.image}
                    listing={item.listing}
                    name={item.name}
                    place={item.place}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      <section className=" py-20 px-5 lg:px-0 ">
        <div>
          <div className=" text-center">
            <h1 className=" sm:text-[26px] md:text-[35px] lg:text-[60px] font-semibold text-[#2d3954] capitalize">
              Select your package
            </h1>
            <p className=" max-w-[700px]  text-[14px] mt-3 md:mt-0 md:text-[16px] mx-auto text-[#72809d] mb-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores
            </p>
          </div>
          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
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
        </div>
      </section>
      <section className="">
        <div className="    ">
          <ContactBottom />
        </div>
      </section>
    </div>
  );
};
