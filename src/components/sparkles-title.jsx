"use client";
import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWordsDemo } from "./innovate-inspire";
import { Linkedin } from "./linkedin/linkedin";
import { Instagram } from "./instagram/instagram";
import Scene from "./secen";
import { Highlight, HeroHighlight } from "./ui/hero-highlight";

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

     
      <HeroHighlight>
        <div className="text-white text-lg md:text-xl font-semibold mb-5 -mt-9 ">
          <Highlight>Techtober is live now!</Highlight> Join us for exciting tech talks, workshops, and more.
        </div>
      </HeroHighlight>

      <div className="flex flex-col items-center mb-6">
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

          <a href="/events" className="uiverse">
            <div className="wrapper flex items-center justify-center space-x-2 relative">
              <span> Events</span>
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
          </a>
        </div>

        {/* Dynamic Instagram and LinkedIn visibility */}
        <div className={`flex space-x-10 transition-all duration-300 ${hover ? 'opacity-100' : 'opacity-0'} ${hover ? 'translate-y-0' : '-translate-y-4'}`} style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}>
          <div className={`${hover ? 'block' : 'hidden'} transition-all duration-300 mt-10`}>
            <span className="transition-all duration-300 ">{<Instagram />}</span>
          </div>
          <div className={`${hover ? 'block' : 'hidden'} transition-all duration-300 mt-10`}>
            <span className="transition-all duration-300">{<Linkedin />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
