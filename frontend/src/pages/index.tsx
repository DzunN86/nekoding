import React from "react";
import BgGradient from "../components/BgGradient";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="h-full w-full items-center justify-center">
        <BgGradient />
        <div className="fixed z-50 flex w-full flex-col">
          <NavBar />
        </div>
        <div className="relative top-0 left-0 h-screen w-full">
          <Hero />
        </div>
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
}
