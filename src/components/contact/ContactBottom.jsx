import React from "react";

function ContactBottom() {
  return (
    <div>
      <div className=" px-5  flex flex-col md:flex-row  md:justify-between bg-primary py-10  items-center">
        <div className=" text-center md:text-start text-white">
          <h1 className=" text-[18px] sm:text-[26px] md:text-[40px]  font-bold">Do You Have Questions ?</h1>
          <h3>We&#39;ll help you to grow your career and growth.</h3>
        </div>
        <div>
          <div className=" text-[16px] md:text-[20px] mt-5 md:mt-0  px-5 cursor-pointer  text-primary     bg-white hover:border-none transition-all duration-300 text-center py-3  border-[#E5F5EC] border-[5px] rounded-full">
            Contact Us Today 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBottom;
