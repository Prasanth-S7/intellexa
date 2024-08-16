"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Team",
            link: "/contact",
        },
        {
            name: "Events",
            link: "/contact",
        },
        {
            name: "Projects",
            link: "/contact",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <div className="relative w-full t-0 md:block hidden">
            <FloatingNav className="font-slussenLight "navItems={navItems} />
        </div>
    );
}
