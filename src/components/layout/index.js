import React from "react";
import { Poppins } from "next/font/google";
import Header from "../header";
import Footer from "../footer";

// Define Poppins font with specific configurations
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function RootLayout({ children }) {
  return (
    <div className={`${poppins.variable} bg-neutral-50`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
