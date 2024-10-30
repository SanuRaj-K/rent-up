"use client";
import { LandingPage } from "@/components/landing";
import { checkUserAuth } from "@/utils/isUserLogged";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    checkUserAuth();
  }, []);
  return (
    <div>
      <LandingPage />
    </div>
  );
}
