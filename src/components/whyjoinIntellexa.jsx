"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HorizontalScroll } from "./horizontalScroll";
import { Footer } from "./footer";
import { useGSAP } from "@gsap/react";
import { CardSpotlightDemo } from "./CardSpotlight";

gsap.registerPlugin(ScrollTrigger);

export const TeamSpotlight = () => {
  const horizontalScrollRef = useRef(null);
  const triggerSection = useRef(null);
  const cardsRef = useRef([]);
  const mainRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [created, setCreated] = useState(false);

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
    console.log("reaches this point")
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.set(cardsRef.current, {
      x: () => window.innerWidth,
      y: () => window.innerHeight,
      opacity: 0,
    });

    let tl = null;

    const horizontalScrollTimeline = gsap.to(horizontalScrollRef.current, {
      x: () => -(horizontalScrollRef.current.offsetWidth - window.innerWidth) - 700,
      ease: "none",
      scrollTrigger: {
        trigger: triggerSection.current,
        pin: true,
        start: "top 12%",
        end: () => `+=${horizontalScrollRef.current.offsetWidth - window.innerWidth}`,
        scrub: 1,
        markers: false,
        onLeave: () => {
          if (tl) {
            tl.kill();
          }
          setCreated(true);
          console.log("runs");
          tl = gsap.timeline({
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top top",
              end: () => `+=${cardsRef.current.length * 300}`,
              scrub: 1,
              pin: true,
              markers: false,
            },
          });

          cardsRef.current.forEach((card, index) => {
            const numCards = cardsRef.current.length;
            const xPos = (window.innerWidth - 440 - 2 * 20) / (numCards - 1) * index;
            const yPos = (window.innerHeight - 440 - 2 * 20) / (numCards - 1) * index;

            tl.to(card, {
              x: xPos,
              y: yPos,
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
      ScrollTrigger.refresh();
    };
  }, [isLargeScreen]);

  const cards = [
    {
      teamName: "IoT Team",
      description: "Develops innovative IoT solutions, connecting devices to enhance user experiences. Transforms everyday objects into intelligent, interconnected technologies."
    },
    {
      teamName: "Algorithms Engineering Team",
      description: "Designs efficient algorithms to solve complex problems and optimize performance. Builds robust, scalable tech solutions through expert algorithm development."
    },
    {
      teamName: "Media Team",
      description: "Captures the club's passion with stunning visuals and engaging content. Shares the club's story with the world, showcasing its vibrant spirit."
    },
    {
      teamName: "Event Team",
      description: "Creates unforgettable events that define the club's memorable moments. Plans and executes impactful events, leaving lasting impressions."
    },
    {
      teamName: "Business Communication Team",
      description: "Enhances essential communication skills for effective collaboration and pitching. Develops strong relationship-building and public speaking abilities."
    },
    {
      teamName: "Design Team",
      description: "Brings the club's vision to life with innovative and engaging visuals. Crafts the visual identity of the club, representing its unique spirit."
    },
    {
      teamName: "Content Team",
      description: "Delivers compelling articles and social media posts that capture the club's essence. Ensures messages are engaging and convincing, immersing the audience."
    },
    {
      teamName: "Creative Team",
      description: "Generates fresh, innovative ideas to set the club apart. Develops new concepts and solutions, driving the club forward."
    },
    {
      teamName: "Public Relations Team",
      description: "Amplifies the club's reach by showcasing team efforts and accomplishments. Increases awareness and binds the club together with effective outreach."
    },
    {
      teamName: "Web Development Team",
      description: "Builds and maintains the club's digital presence. Crafts user-friendly, responsive websites and platforms, ensuring smooth navigation and a seamless user experience."
    },
    {
      teamName: "AI Engineering Team",
      description: "Designs and implements AI-driven solutions. Develops intelligent systems that enhance the club's projects, pushing the boundaries of innovation and automation."
    },
  ];

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
      <section id="team" className="min-h-screen md:h-screen relative md:p-5" ref={mainRef}>
        <div className="text-right justify-end absolute top-5 right-4 md:block hidden mt-10">
          <div className="flex flex-col">
            <h2 className=" font-slussen text-white text-left text-3xl md:text-5xl">TEAM</h2>
            <h2 className=" font-slussen text-white text-3xl md:text-5xl">SPOTLIGHT</h2>
          </div>
        </div>
        <div className="md:block hidden">
          {cards.map(({ teamName, description }, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card absolute md:w-[465px] md:h-[465px] h-[200px] w-full border border-white/[0.2] mt-0 shadow-lg"
              style={{
                zIndex: cards.length + index,
              }}
            >
              <CardSpotlightDemo teamName={teamName} description={description} index={index}></CardSpotlightDemo>
            </div>
          ))}

        </div>
        <div className="md:hidden block px-5">
          <div className="text-right flex justify-end mb-5 mt-7">
            <div className="flex flex-col">
              <h2 className=" font-slussen text-white text-left text-3xl">TEAM</h2>
              <h2 className=" font-slussen text-white text-3xl">SPOTLIGHT</h2>
            </div>
          </div>
          {cards.map(({ teamName, description }, index) => (
            <CardSpotlightDemo
              key={index}
              teamName={teamName} description={description}
              className="mb-4 border border-white/[0.2] mx-0 w-full"
              index={index}
            />
          ))}
        </div>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};