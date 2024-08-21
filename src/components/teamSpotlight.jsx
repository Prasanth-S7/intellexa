"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CardStack = ({ horizontalScrollRef }) => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (typeof window === 'undefined') return;
    if (!horizontalScrollRef.current) return;

    gsap.set(cardsRef.current, {
      x: () => window.innerWidth, 
      y: () => window.innerHeight,
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom center", 
        end: () => `+=${cardsRef.current.length * 300}`, 
        scrub: 1,
        pin: sectionRef.current,
        pinSpacer:false,
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
        stagger: 0.6,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = Array(9).fill(null);

  return (
    <section
      className="relative w-full md:mt-[1100px] h-screen pt-0 overflow-hidden px-5"
      ref={sectionRef}
    > hithere
      {cards.map((_, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="card absolute w-[465px] h-[465px] bg-neutral-400 border mt-0 flex items-center justify-center shadow-lg"
          style={{
            zIndex: cards.length + index,
          }}
        >
          Card {index + 1}
        </div>
      ))}
    </section>
  );
};

export default CardStack;
