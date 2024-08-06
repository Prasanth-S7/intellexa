"use client";
import React, { forwardRef } from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWordsDemo } from "./innovate-inspire";

export function SparklesTitle() {
    return (
        <div className=" bg-transparent w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-[#9207fb] text-5xl lg:text-7xl font-bold text-center relative z-20 mt-0">
                <div>
                    <div className="text-white mb-10 font-slussenLight text-2xl font-semibold">The place where creativity meets invention: striving for groundbreaking achievements one step at a time.</div>
                    <div className="text-custom-purple">INTELLEXA</div>
                </div>
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />


                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <button className="uiverse">
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
            <div className="mt-10">
                <FlipWordsDemo></FlipWordsDemo>
            </div>
        </div>
    );
}





