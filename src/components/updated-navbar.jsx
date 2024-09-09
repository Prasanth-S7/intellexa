"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Menu from "./menu";

export function FloatingNavDemo() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "#about-us",
        },
        {
            name: "Team",
            link: "#team",
        },
        {
            name: "Events",
            link: "/events",
        },
        {
            name: "Wall Of Fame",
            link: "/walloffame",
        },
        {
            name: "Contact",
            link: "#footer",
        },
    ];

    return (
        <div className="relative w-full t-0">
            {/* Show Menu component on small screens */}
            <div className="block md:hidden">
                <Menu navItems={navItems}/>
            </div>

            {/* Show FloatingNav component on medium and larger screens */}
            <div className="hidden md:block">
                <FloatingNav className="font-slussenLight" navItems={navItems} />
            </div>
        </div>
    );
}
