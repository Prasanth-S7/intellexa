"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} className="your-custom-class" isGuidelinePage={false} />
        </div>
    );
}

export const projects = [
    {
        title: "DSA WORKSHOP",
        description:
            "💻 This hands-on workshop focuses on mastering the fundamentals of Data Structures and Algorithms (DSA). 📊 It is ideal for students looking to enhance their problem-solving abilities and prepare effectively for technical interviews. 🔍",
        date: "7th Nov 2024",
        venue: "Offline - A105",
        timing: "3:00 PM - 5:00 PM",
        // eventStatus: "Registration Coming Soon",
        registerLink: "https://forms.gle/T9FPByTjoY51Vxuk6"
    }
]    