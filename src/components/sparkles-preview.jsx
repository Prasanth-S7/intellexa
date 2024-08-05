"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { SparklesTitle } from "./sparkles-title";

export function SparklesPreview({ children, heroSectionRef }) {
    return (
        <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full absolute inset-0 min-h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="h-full w-full "
                    particleColor="#FFFFFF"
                />
            </div>
            <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                <SparklesTitle ref={heroSectionRef} />
            </h1>
            <div className="text-white mt-20">
                {children}
            </div>
        </div>
    );
}
