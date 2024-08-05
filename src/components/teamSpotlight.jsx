"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
    const horizontalScrollRef = useRef(null);
    const triggerSection = useRef(null);

    useGSAP(() => {
        console.log(horizontalScrollRef.current.offSetWidth)
        gsap.to(horizontalScrollRef.current, {
            x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
            ease: "none",
            scrollTrigger: {
                trigger: triggerSection.current,
                pin: true, 
                start: "top 10%",
                end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth } `, // End point based on content width
                scrub: 1, 
                // markers:true
            },
        });
    }, []);

    return (
        <section className="h-screen mx-[300px]  " ref={triggerSection}>
            <div className="flex flex-col items-start">
                <div className="space-x-14 text-6xl flex-col justify-start mb-[100px]">
                    <div className="px-[5px] text-custom-yellow font-bold border-l-4 pl-5 border-custom-yellow">
                        Team <br /> Spotlight
                    </div>
                </div>
                <div className=""> 
                    <div
                        className="flex space-x-10 mx-0"
                        ref={horizontalScrollRef}
                    >
                        <div className="w-[400px] h-[400px] border border-white ml-[500px]"></div>
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
