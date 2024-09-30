"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useEffect, useState } from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative mt-12 flex items-center bg-transparent justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-600 dark:bg-dot-thick-neutral-900 pointer-events-none transition duration-300 ease-in-out" />
      <motion.div
        className="pointer-events-none bg-dot-thick-purple-600 dark:bg-dot-thick-purple-700 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-80"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20 transition duration-300", className)}>
        {children}
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationComplete) {
        setAnimationComplete(false); // Allow animation to restart
      }
    }, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [animationComplete]);

  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: animationComplete ? "100% 100%" : "0% 100%",
      }}
      onAnimationComplete={() => {
        setAnimationComplete(true);
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block",
        background: "linear-gradient(90deg, #a77bca, #7c4c98, #5c2d6d)",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};