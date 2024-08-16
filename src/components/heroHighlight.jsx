"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
    return (
        <HeroHighlight>
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
                className=" px-4 w-full text-base sm:text-xl md:text-2xl bg-black font-slussenLight font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                    The place where creativity meets invention: striving for groundbreaking achievements{" "}
                <Highlight className="text-base text-white  sm:text-xl md:text-2xl mt-0 translate-y-10">
                    one step at a time.
                </Highlight>
            </motion.h1>
        </HeroHighlight>
    );
}
