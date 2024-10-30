"use client"; // Add this to indicate this is a client component

import { Poppins } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/redux/store";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        <Provider store={store}>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
