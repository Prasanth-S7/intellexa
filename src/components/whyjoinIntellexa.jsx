"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HorizontalScroll } from "./horizontalScroll";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
    const horizontalScrollRef = useRef(null);
    const triggerSection = useRef(null);

    useGSAP(() => {
        // console.log(horizontalScrollRef.current.offSetWidth)
        gsap.to(horizontalScrollRef.current, {
            x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
            ease: "none",
            scrollTrigger: {
                trigger: triggerSection.current,
                pin: true,
                start: "top 12%",
                end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth} `, // End point based on content width
                scrub: 1,
                // markers:true
            },
        });
    }, []);

    return (
        <section className="h-screen mx-[300px]  " ref={triggerSection}>
            <div className="flex flex-col items-start">
                <div className="space-x-14 text-6xl flex-col justify-start mb-[100px]">
                    <div className="px-[5px] text-white font-slussen font-bold border-l-4 pl-5 border-white">
                        WHY JOIN<br /> INTELLEXA?
                    </div>
                </div>
                <div className="">
                    <div
                        className="flex space-x-10 mx-0"
                        ref={horizontalScrollRef}
                    >
                        <HorizontalScroll number="01" className={`ml-[500px]`} info="Work on cutting-edge projects across various domains, from IoT solutions to creative content, and gain hands-on experience with real-world applications"/>
                        <HorizontalScroll number="02"  info="Enhance your technical, creative, and communication skills through diverse team roles and challenging tasks, preparing you for future career opportunities"/>
                        <HorizontalScroll number="03"  info="Join a vibrant community of like-minded peers, collaborate with experts, and contribute to exciting initiatives that make a difference"/>
                        <HorizontalScroll number="04"  info="Participate in and organize impactful events that showcase your talents, foster creativity, and help build the club's legacy"/>
                        <HorizontalScroll number="05"  info="Build a strong network, improve your resume, and gain valuable experience that will set you apart in the professional world"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
