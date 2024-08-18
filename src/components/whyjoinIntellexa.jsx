"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HorizontalScroll } from "./horizontalScroll";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
    const horizontalScrollRef = useRef(null);
    const triggerSection = useRef(null);
    const scrollTriggerRef = useRef(null);
    const resizeTimeout = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                clearTimeout(resizeTimeout.current);
                resizeTimeout.current = setTimeout(() => {
                    setIsLargeScreen(window.innerWidth > 768);
                    ScrollTrigger.refresh();
                }, 150);
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
                clearTimeout(resizeTimeout.current);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useGSAP(() => {
        if (scrollTriggerRef.current) {
            scrollTriggerRef.current.kill();
        }

        if (!isLargeScreen) {
            return; 
        }

        if (horizontalScrollRef.current && triggerSection.current) {
            scrollTriggerRef.current = gsap.to(horizontalScrollRef.current, {
                x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerSection.current,
                    pin: true,
                    start: "top 12%",
                    end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth}`,
                    scrub: 1,
                    // markers: true,
                },
            });
        }
        return () => {
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
            }
        };
    }, [isLargeScreen]);
    return (
        <section className="md:h-screen mx-[15%] " ref={triggerSection}>
            <div className="flex flex-col items-start">
                <div className="space-x-14 text-6xl flex-col justify-start mb-[100px]">
                    <div className="px-[5px] lg:text-6xl md:text-4xl text-4xl text-white font-slussen font-bold border-l-4 pl-5 border-white">
                        WHY JOIN<br /> INTELLEXA?
                    </div>
                </div>
                <div className="">
                    <div
                        className="md:flex md:space-x-10 mx-0 overflow-hidden"
                        ref={horizontalScrollRef}
                    >
                        <HorizontalScroll number="01" className={`md:ml-[500px] md:mb-0 mb-6`} info="Work on cutting-edge projects across various domains, from IoT solutions to content creation, and gain hands-on experience working with real-world applications in technology"/>
                        <HorizontalScroll number="02" className={`md:mb-0 mb-6`} info="Enhance your technical, creative, and communication skills through diverse team roles, challenging tasks, and projects, all preparing you for future career growth opportunities"/>
                        <HorizontalScroll number="03" className={`md:mb-0 mb-6`} info="Join a vibrant community of passionate peers, collaborate with experts, and contribute to meaningful initiatives that have an impact on the world around you"/>
                        <HorizontalScroll number="04" className={`md:mb-0 mb-6`} info="Participate in and organize impactful events that highlight your talents, foster creativity, and contribute to the lasting legacy of the club's initiatives and growth"/>
                        <HorizontalScroll number="05" className={`md:mb-0 mb-6`} info="Build a strong professional network, improve your resume, and gain valuable, hands-on experience that will distinguish you in the competitive world of work"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
