"use client";
import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWordsDemo } from "./innovate-inspire";
// import { Linkedin } from "./linkedin/linkedin";
// import { Instagram } from "./instagram/instagram";
import Scene from "./secen";
import { Highlight, HeroHighlight } from "./ui/hero-highlight";
// import { Whatsapp } from "./whatsapp/whatsapp";
import { Socials } from "./socials/social";

export function SparklesTitle() {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-transparent overflow-x-hidden w-full h-[700px] bg-black flex flex-col items-center justify-center overflow-hidden rounded-md relative">
      <Scene />
      <h1 className="md:text-7xl text-[#9207fb] text-[2.25rem] lg:text-7xl font-bold text-center relative z-20 mt-0">
        <div>
          <div className="text-[#9966CC] -mt-8">INTELLEXA</div>
        </div>
      </h1>
      <div className="w-full h-40 relative md:block hidden">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="mb-0">
        <FlipWordsDemo />
      </div>
      <div className="flex flex-col items-center mb-6 mt-5">
        <div className="flex space-x-4 mb-2">
          <button className="uiverse" onClick={() => setHover(!hover)}>
            <div className="wrapper">
              <span>Join Us</span>
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </button>
        </div>
        <div className={`${hover ? 'block' : 'hidden'}`}>
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
}
