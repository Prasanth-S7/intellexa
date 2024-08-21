"use client";
import { useRef, useEffect, useState, use } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStack from "./teamSpotlight";
import { HorizontalScroll } from "./horizontalScroll";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
  const horizontalScrollRef = useRef(null);
  const triggerSection = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const mainRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 768);
        ScrollTrigger.refresh();
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useGSAP(() => {
    if (!isLargeScreen || !horizontalScrollRef.current) return;

    const horizontalScrollTimeline = gsap.to(horizontalScrollRef.current, {
      x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
      ease: "none",
      scrollTrigger: {
        trigger: triggerSection.current,
        pin: true,
        start: "top 12%",
        end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth}`,
        scrub: 1,
        onComplete: () => {
            setAnimationComplete(true)
            console.log('completed')},
        // markers: true,
      },
    });

    return () => {
      horizontalScrollTimeline.kill();
    };
  }, [isLargeScreen]);

  return (
    <div>
      <section className=" md:mx-[15%] mx-[10%]" ref={triggerSection}>
        <div className="flex flex-col items-start">
          <div className="space-x-14 text-6xl flex-col justify-start mb-[8vh]">
            <div className="px-[5px] lg:text-[8vh] md:text-4xl text-4xl text-white font-slussen font-bold border-l-4 pl-5 border-white leading-tight lg:leading-none">
              WHY JOIN<br />
              <span>INTELLEXA?</span>
            </div>
          </div>
          <div className="">
            <div
              className="md:flex md:space-x-10 mx-0 overflow-hidden"
              ref={horizontalScrollRef}
            >
              <HorizontalScroll number="01" className={`md:ml-[500px] md:mb-0 mb-6`} info="Work on cutting-edge projects across various domains, from IoT solutions to content creation, and gain hands-on experience working with real-world applications in technology" />
              <HorizontalScroll number="02" className={`md:mb-0 mb-6`} info="Enhance your technical, creative, and communication skills through diverse team roles, challenging tasks, and projects, all preparing you for future career growth opportunities" />
              <HorizontalScroll number="03" className={`md:mb-0 mb-6`} info="Join a vibrant community of passionate peers, collaborate with experts, and contribute to meaningful initiatives that have an impact on the world around you" />
              <HorizontalScroll number="04" className={`md:mb-0 mb-6`} info="Participate in and organize impactful events that highlight your talents, foster creativity, and contribute to the lasting legacy of the club's initiatives and growth" />
              <HorizontalScroll number="05" className={`md:mb-0 mb-6`} info="Build a strong professional network, improve your resume, and gain valuable, hands-on experience that will distinguish you in the competitive world of work" />
            </div>
          </div>
        </div>
      </section>
        <section className="team-spotlight overflow-hidden h-screen" ref={mainRef}>
          <CardStack horizontalScrollRef={horizontalScrollRef} />
        </section>
    </div>
  );
};
