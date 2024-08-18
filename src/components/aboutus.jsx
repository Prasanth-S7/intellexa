"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = ({ heroRef }) => {
    const resizeTimeout = useRef(null); // For debouncing
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const leftSection = useRef(null);
    const rightSection = useRef(null);
    const lastLoremDiv = useRef(null);
    const scrollTriggerRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                clearTimeout(resizeTimeout.current);
                resizeTimeout.current = setTimeout(() => {
                    setIsLargeScreen(window.innerWidth > 768);
                    ScrollTrigger.refresh(); // Refresh ScrollTrigger on resize
                }, 150); // Adjust the debounce delay as needed
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
        if (!isLargeScreen) {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers if screen is small
            return;
        }

        console.log("useGSAP runs on large screens");
        const left = leftSection.current;
        const right = rightSection.current;
        const last = lastLoremDiv.current;
        const hero = heroRef.current;

        if (left && right && last && hero) {
            gsap.to(left, {
                scrollTrigger: {
                    trigger: hero,
                    start: "bottom top",
                    endTrigger: last,
                    end: 'bottom center',
                    pin: left,
                    // scrub: true,
                }
            });
        }

        // Cleanup ScrollTriggers on component unmount or when resizing
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isLargeScreen]);
    return (
        <section className="mx-[15%] md:flex justify-between text-white mb-[170px]">
            <div className="md:flex md:space-x-[15%]">
                <div className="space-x-14 text-6xl flex-col justify-start">
                    <div className="px-[5px] text-white lg:text-6xl md:text-4xl text-5xl font-bold border-l-4 pl-5 font-slussen" ref={leftSection}>
                        ABOUT US
                    </div>
                </div>
                <div className="flex-col w-full mt-[40%] overflow-y-auto" ref={rightSection}>
                    <div className='md:mb-[50%] mb-[30%] ml-0 w-fit'>
                        <div className='text-custom-purple mb-5 font-slussen font-semibold lg:text-3xl md:text-xl text-xl'>
                            MISSION AND VISION
                        </div>
                        <div className='text-[19px] font-slussenLight'>
                            Our mission is to foster a collaborative environment where students can explore and innovate in the field of technology. We strive to provide opportunities for hands-on learning, skill development, and professional growth.
                        </div>
                    </div>
                    <div className='md:mb-[50%] mb-[30%]'>
                        <div className='text-custom-purple mb-5 font-semibold font-slussen lg:text-3xl md:text-xl text-xl'>
                            KEY PROJECTS AND INITIATIVES
                        </div>
                        <div className='text-[19px] font-slussenLight'>
                            Our club is proud to lead several innovative projects such as our annual coding bootcamp, a community-driven open-source software initiative, and partnerships with local tech firms for real-world problem-solving
                        </div>
                    </div>
                    <div className=" md:mb-[50%] mb-[30%] " ref={lastLoremDiv}>
                        <div className='text-custom-purple mb-5 font-semibold font-slussen lg:text-3xl md:text-xl text-xl'>
                            OPPURTUNITIES FOR INVOLVEMENT
                        </div>
                        <div className='text-[19px] font-slussenLight'>
                            We offer numerous opportunities for members to get involved, from leading special projects and joining committees to participating in mentorship programs. Engaging with these opportunities not only helps you develop valuable skills but also enhances your networking and professional growth within the tech community
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
