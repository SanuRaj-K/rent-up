import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
export const NavBar = () => {
  return (
    <div className="  w-full px-10 md:px-0 md:max-w-[80%]  mx-auto bg-white">
      <section className=" text-base  capitalize text-black font-medium py-5 fb items-center">
        <div>
          <Image
            className=" hidden md:block cursor-pointer"
            src={"/assets/icons/logo.png"}
            alt="logo"
            height={50}
            width={150}
          />
          <Image
            className=" md:hidden block cursor-pointer"
            src={"/assets/icons/logo.png"}
            alt="logo"
            height={20}
            width={50}
          />
        </div>
        <div className=" hidden lg:block">
          <ul className="  fb  items-center ">
            {navLinks?.map((item, index) => (
              <li
                className=" px-5 hover:text-primary transition-all duration-150"
                key={index}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:block">
          <ul className=" fb  items-center">
            <li className=" pr-5">
              <span className=" p-1  text-white bg-primary rounded-full">
                2
              </span>
              <span className=" ml-2">My list</span>
            </li>
            <li className=" cursor-pointer group  text-white bg-primary rounded-md px-8 py-4">
              <ExitToAppIcon />
              <span className=" group-hover:text-black transition-all duration-300">
                Sign in
              </span>
            </li>
          </ul>
        </div>
        <div className=" lg:hidden">
          <MenuIcon />
        </div>

        {/* Mobile Nav */}
        <ul>
          {navLinks.map((item, index) => (
            <Link href={item.path} key={index}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};
