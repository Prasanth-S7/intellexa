"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
    return (
        <HeroHighlight className="py-0 my-0">
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                id="#" 
                className="px-2 whitespace-nowrap text-sm sm:text-base md:text-lg bg-black font-slussenLight font-bold text-white leading-tight text-center mx-auto"
            >
                <Highlight className="text-sm text-white sm:text-base md:text-lg mt-0">
                    Techtober is live now!
                </Highlight>{" "}
                Join us for exciting tech talks, workshops, and more.
            </motion.h1>
        </HeroHighlight>
    );
}
