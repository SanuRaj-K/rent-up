'use client'

import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const name = useSelector((state) => state.auth.user?.email);
  return (
    <div className=" h-screen w-full flex justify-center items-center content-center">
      <div>Welcome to account page {name && name}</div>
    </div>
  );
};

export default Account;
