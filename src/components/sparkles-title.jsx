"use client";
import React, { forwardRef } from "react";
import { SparklesCore } from "./ui/sparkles";

export const SparklesTitle = forwardRef((props, ref) => (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md mb-[250px]" ref={ref}>
        <div className="flex-col justify-center items-center mt-[270px]">
            <h1 className="md:text-7xl text-[#9207fb] text-5xl lg:text-7xl font-bold text-center relative z-20 mt-0">
                Intellexa
            </h1>
            <div className="w-[40rem] h-40 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1000}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                <div className="absolute inset-0 w-full border-2 border-white h-full bg-[#171717] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    </div>
));
