'use client'
import { SectionHeaders } from "@/components/section-headers";
import React from "react";
import toast from "react-hot-toast";

const ContactPage = () => {
  return (
    <div>
      <section className="  ">
        <div>
          <SectionHeaders
            desc={"Get Helps & Friendly Support"}
            title={"Contact Us"}
            image={"about-main.jpg"}
          />
        </div>
      </section>
      <section className=" w-full py-20">
        <div className=" w-[80%] shadow-lg mx-auto">
          <form className=" p-5" action="">
            <h1 className=" font-semibold">Fillup the Form</h1>
            <div className=" w-full mt-5  flex  flex-col md:flex-row md:justify-between">
              <input className="  md:w-1/2 md:mr-4 h-[35px] text-black placeholder:text-black px-5 text-xs rounded-md border-[#808080] border-[2px]" type="text" placeholder="Name" name="" id="" />
              <input className="  md:w-1/2  mt-5  md:mt-0 h-[35px] text-black placeholder:text-black px-5 text-xs rounded-md border-[#808080] border-[2px]" type="email" placeholder="Email" name="" id="" />
            </div>
            <div className=" my-6">
              <input className=" w-full  h-[35px] text-black placeholder:text-black px-5 text-xs rounded-md border-[#808080] border-[2px]" type="text" placeholder="Subject" name="" id="" />
            </div>
            <div className=" w-full">
              <textarea className="  border-[#808080]  w-full h-[200px] border-[2px]" />
            </div>
            <div onClick={()=>toast.success('Available soon...!')} className=" my-5  bg-primary px-5 py-3 rounded-lg text-white inline-block font-semibold  text-sm cursor-pointer ">
              <div>Submit Request</div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
