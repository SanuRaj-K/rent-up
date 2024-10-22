import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import DoneIcon from '@mui/icons-material/Done';

export const Agents = ({ image, place, name, listing }) => {
  return (
    <div>
      <div className="  bg-white hover:shadow-2xl hover:border-none transition-all duration-300 p-[20px] border-2  w-[380px] rounded-md">
        <div className=" text-white inline-block rounded-3xl px-7 py-3 font-semibold  text-sm bg-[#ff6922]">
          {listing} Listing
        </div>
        <div className="flex flex-col items-center content-center justify-center  py-5 ">
        <div className=" ">
          <div className="  p-3 border-[6px]   rounded-full inline-block ">
            <Image
              src={`/assets/images/agents/${image}`}
              alt={image}
              className=" rounded-full"
              width={90}
              height={90}
            />
           
          </div>
          {/* <div className="   rounded-full text-white inline bg-blue-700">
                <DoneIcon />

            </div> */}
        </div>
        
          <div className="   text-[14px]  flex items-center text-[#2d3954] text-sm">
            <span>
              <LocationOnIcon />
            </span>
            <span className=" ml-1">{place}</span>
            
          </div>
          
          <div className=" my-2 font-medium">
            <span>{name}</span>
          </div>
          <div>
            <ul className=" mt-3 flex">
              <li className=" bg-[#f4f5f7] text-[#808080] cursor-pointer  rounded-full p-2">
                <FacebookIcon />
              </li>
              <li className=" bg-[#f4f5f7] text-[#808080] cursor-pointer  mx-3 rounded-full p-2">
                <LinkedInIcon />
              </li>
              <li className=" bg-[#f4f5f7] text-[#808080] cursor-pointer  mr-3 rounded-full p-2">
                <TwitterIcon />
              </li>
              <li className=" bg-[#f4f5f7] text-[#808080] cursor-pointer  rounded-full p-2">
                <InstagramIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-white fb">
          <div className="  cursor-pointer flex items-center  rounded-md bg-primary px-4 py-2">
            <span>
              <EmailIcon />
            </span>
            <span className=" ml-1">Message</span>
          </div>
          <div className=" bg-black  cursor-pointer text-white px-5 py-2 rounded-md">
            <CallIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
