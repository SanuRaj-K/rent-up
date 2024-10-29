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
    <div className="    sticky top-0      w-full rounded-md md:px-0 md:max-w-[80%]  mx-auto bg-white">
      <section className=" text-base  px-2  w-full capitalize text-black font-medium py-4  shadow-lg fb items-center">
        <div>
          <Link href={"/"}>
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
          </Link>
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
          <ul className=" flex items-center">
            <li className="   flex items-center pr-5">
              <div className="  size-5 flex items-center justify-center bg-primary text-white rounded-full">
                <span className=" text-[10px] p-1">2</span>
              </div>
              <span className=" ml-2">My list</span>
            </li>
            <li className="  flex   cursor-pointer group  text-white bg-primary rounded-md px-8 py-2">
              <div className=" mr-2 size-5">
                <ExitToAppIcon />
              </div>

              <span className=" group-hover:text-black transition-all duration-300">
                Sign in
              </span>
            </li>
          </ul>
        </div>
        <div
          className="  block lg:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
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
