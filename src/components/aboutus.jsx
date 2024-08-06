"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = ({ heroRef }) => {
    const leftSection = useRef(null);
    const rightSection = useRef(null);
    const lastLoremDiv = useRef(null);

    useGSAP(() => {
        console.log(heroRef.current);
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
                    // markers: true,
                    scrub: true,
                }
            });
        }
    });

    return (
        <section className="mx-[300px] flex justify-between text-white mb-[170px]">
            <div className="flex space-x-[200px]">
                <div className="space-x-14 text-6xl flex-col justify-start">
                    <div className="px-[5px] text-custom-yellow font-bold border-l-4 pl-5 border-custom-yellow font-slussen" ref={leftSection}>
                        ABOUT US
                    </div>
                </div>
                <div className="flex-col text-3xl mt-[200px] overflow-y-auto" ref={rightSection}>
                    <div className='mb-[300px]'>
                        <div className='text-custom-purple mb-5 font-slussen font-semibold'>
                            MISSION AND VISION
                        </div>
                        <div className='text-[19px] font-slussenLight'>
                            Our mission is to foster a collaborative environment where students can explore and innovate in the field of technology. We strive to provide opportunities for hands-on learning, skill development, and professional growth.
                        </div>
                    </div>
                    <div className='mb-[300px]'>
                        <div className='text-custom-purple mb-5 font-semibold font-slussen'>
                            KEY PROJECTS AND INITIATIVES
                        </div>
                        <div className='text-[19px] font-slussenLight'>
                            Our club is proud to lead several innovative projects such as our annual coding bootcamp, a community-driven open-source software initiative, and partnerships with local tech firms for real-world problem-solving
                        </div>
                    </div>
                    <div className="mb-[300px] "ref={lastLoremDiv}>
                        <div className='text-custom-purple mb-5 font-semibold font-slussen'>
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
