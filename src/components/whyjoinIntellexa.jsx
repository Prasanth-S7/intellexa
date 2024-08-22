"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HorizontalScroll } from "./horizontalScroll";
import { Footer } from "./footer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
  const horizontalScrollRef = useRef(null);
  const triggerSection = useRef(null);
  const cardsRef = useRef([]);
  const mainRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
      ScrollTrigger.refresh();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    if (!isLargeScreen || !horizontalScrollRef.current) return;
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.set(cardsRef.current, {
      x: () => window.innerWidth,
      y: () => window.innerHeight,
      opacity: 0,
    });
    const horizontalScrollTimeline = gsap.to(horizontalScrollRef.current, {
      x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
      ease: "none",
      scrollTrigger: {
        trigger: triggerSection.current,
        pin: true,
        pinSpacing: true,
        start: "top 12%",
        end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth}`,
        scrub: 1,
        markers: true,
        onLeave: () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top top",
              end: () => `+=${cardsRef.current.length * 300}`,
              scrub: 1,
              pin: true, // Pin the section
              pinSpacing: true,
              markers: true,
            },
          });

          cardsRef.current.forEach((card, index) => {
            tl.to(card, {
              x: 120 * index,
              y: 30 * index,
              opacity: 1,
              duration: 2,
              ease: "power2.out",
              stagger: 0.3,
            });
          });
        },
      },
    });

    return () => {
      horizontalScrollTimeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLargeScreen]);

  const cards = Array(9).fill(null);

  return (
    <div>
      <section className="md:mx-[15%] mx-[10%]" ref={triggerSection}>
        <div className="flex flex-col items-start">
          <div className="space-x-14 text-6xl flex-col justify-start mb-[8vh]">
            <div className="px-[5px] lg:text-[8vh] md:text-4xl text-4xl text-white font-slussen font-bold border-l-4 pl-5 border-white leading-tight lg:leading-none">
              WHY JOIN<br />
              <span>INTELLEXA?</span>
            </div>
          </div>
          <div className="" ref={horizontalScrollRef}>
            <div className="md:flex md:space-x-10 mx-0 overflow-hidden">
              <HorizontalScroll number="01" className={`md:ml-[500px] md:mb-0 mb-6`} info="Work on cutting-edge projects across various domains, from IoT solutions to content creation, and gain hands-on experience working with real-world applications in technology" />
              <HorizontalScroll number="02" className={`md:mb-0 mb-6`} info="Enhance your technical, creative, and communication skills through diverse team roles, challenging tasks, and projects, all preparing you for future career growth opportunities" />
              <HorizontalScroll number="03" className={`md:mb-0 mb-6`} info="Join a vibrant community of passionate peers, collaborate with experts, and contribute to meaningful initiatives that have an impact on the world around you" />
              <HorizontalScroll number="04" className={`md:mb-0 mb-6`} info="Participate in and organize impactful events that highlight your talents, foster creativity, and contribute to the lasting legacy of the club's initiatives and growth" />
              <HorizontalScroll number="05" className={`md:mb-0 mb-6`} info="Build a strong professional network, improve your resume, and gain valuable, hands-on experience that will distinguish you in the competitive world of work" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-2 border-pink-800 h-screen relative" ref={mainRef}>
        {cards.map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card absolute w-[465px] h-[465px] bg-neutral-400 border mt-0 flex items-center justify-center shadow-lg"
            style={{
              zIndex: cards.length - index,
            }}
          >
            Card {index + 1}
          </div>
        ))}
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};
