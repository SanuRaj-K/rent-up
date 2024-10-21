import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  awards,
  exploreLocation,
  properties,
  propertiesList,
} from "@/constants";
import { PropertyTypes } from "../property-types";
import { PropertyList } from "../property-list";
import { Award } from "../awards";
import { ExploreLocation } from "../location";

export const LandingPage = () => {
  return (
    <div>
      {/* <section className=" pb-36 min-h-screen w-full bg-landing bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className=" text-[60px] capitalize  text-white font-semibold">
            search your next home
          </h1>
          <h3 className=" text-white text-[16px]">
            find new & featured property located in your local city
          </h3>
          <div className=" px-5 py-3  fb min-w-[80%] mt-10 rounded-sm bg-white">
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
            <div className=" flex flex-col">
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
            <div className=" flex flex-col">
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
            <div className=" flex items-center">
              <span className=" font-semibold  text-black">
                Advanced filter
              </span>
              <div className="  cursor-pointer bg-primary px-4 py-3 rounded-md ml-3  text-white">
                <SearchIcon />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className=" px-10 md:px-0 py-20 bg-[#f7f9fc]">
        <div className=" flex flex-col  items-center w-full mx-auto">
          <h1 className=" text-[35px] font-semibold">
            Featured Property Types
          </h1>
          <h3 className=" text-[#72809d] text-[20px]">
            Find All Type Property.
          </h3>
        </div>

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
        <div className=" text-center  py-16   w-full">
          <h1 className=" text-[35px]  font-semibold capitalize text-[#2d3954]">
            Recent properties listed
          </h1>
          <p className="  text-[#72809d] max-w-[700px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
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
      <section className=" bg-[#122947] text-white py-20 ">
        <div className="max-w-[80%] mx-auto">
          <div className=" text-center">
            <h1 className=" text-primary   capitalize ">our awards</h1>
            <p className=" text-[24px] md:text-[30px] max-w-[700px] mx-auto">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </p>
          </div>
          <ul className=" mt-16 fb flex-wrap">
            {awards?.map((item, index) => {
              const IconComp = item.icon;
              return (
                <li className=" mb-5 md:mb-0" key={index}>
                  <Award title={item.title} sub={item.sub} icon={IconComp} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section>
        <div>
          <h1>Explore By Location</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </h3>
        </div>
        <ul className=" grid grid-cols-3 place-items-center gap-5">
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
      </section>
    </div>
  );
};
