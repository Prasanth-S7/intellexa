"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
    const horizontalScrollRef = useRef(null);

    useEffect(() => {
        // GSAP ScrollTrigger for horizontal scrolling effect
        gsap.to(horizontalScrollRef.current, {
            x: () => -(horizontalScrollRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: horizontalScrollRef.current,
                pin: true, // Pin the section in place
                start: "top top", // When the top of the trigger hits the top of the viewport
                end: () => `+=${horizontalScrollRef.current.scrollWidth - window.innerWidth}`, // End point based on content width
                scrub: true, // Smoothly scrub through the scroll
            },
        });
    }, []);

    return (
        <section className="h-screen mx-[300px] border-2 border-white ">
            <div className="flex flex-col items-start">
                <div className="space-x-14 text-6xl flex-col justify-start mb-[100px]">
                    <div className="px-[5px] text-custom-purple font-bold border-l-4 pl-5 border-custom-purple">
                        Team <br /> Spotlight
                    </div>
                </div>
                <div className="overflow-hidden"> {/* Hide horizontal scrollbar */}
                    <div
                        className="flex space-x-10"
                        ref={horizontalScrollRef}
                    >
                        <div className="w-[400px] h-[400px] ml-[500px] border border-white"></div>
                        <div className="w-[400px] h-[400px] border border-white"></div>
                        <div className="w-[400px] h-[400px] border border-white"></div>
                        <div className="w-[400px] h-[400px] border border-white"></div>
                        <div className="w-[400px] h-[400px] border border-white"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
