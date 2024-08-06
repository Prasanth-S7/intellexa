"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { CustomButton } from "./joinUsButton";
import { SparklesTitle } from "./sparkles-title";
export function ShootingStarsAndStarsBackgroundDemo({ children }) {
    return (
        <div className="min-h-screen rounded-md bg-black flex flex-col items-center justify-center relative w-full  py-0">
            <h2 className="relative flex-col md:flex-row z-10 text-4xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                <div>
                    <div className="text-white mb-10 font-slussenLight text-2xl font-semibold">The place where creativity meets invention: striving for groundbreaking achievements one step at a time.</div>
                    <div className="text-custom-purple">INTELLEXA</div>
                    <div className="text-lg text-white font-slussenLight">Innovative.Impact.Inspire.</div>
                    <div>
                        <CustomButton name="Join us"></CustomButton>
                    </div>
                </div>
                {/* <SparklesTitle></SparklesTitle> */}
            </h2>
            {children}
            <ShootingStars starHeight={2} starColor="white" className="min-h-screen" />
            <StarsBackground className="min-h-screen py-0" />
        </div>
    );
}