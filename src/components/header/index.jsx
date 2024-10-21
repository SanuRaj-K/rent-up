"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="  relative  w-full px-10 md:px-0 md:max-w-[80%]  mx-auto bg-white">
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
        <div className=" block lg:hidden" onClick={() => setShowMenu((prev) => !prev)}>
          {showMenu ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Mobile Nav */}
      </section>
      <div className=" lg:hidden absolute right-0  px-10   bg-primary top-0">
        {showMenu && (
          <ul className=" relative  py-5  ">
            <div
              onClick={() => setShowMenu((prev) => !prev)}
              className="  w-full absolute top-0 right-0"
            >
              {" "}
              <CloseIcon />
            </div>
            {navLinks.map((item, index) => (
              <Link className="   text-white " href={item.path} key={index}>
                <li className=" mb-3 border-b-2 capitalize">{item.title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
