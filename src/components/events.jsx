"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import profileBuilding from "@/assets/profileBuilding.png"
import resumeBuilding from "@/assets/resumeBuilding.png"

export function CardHoverEffectDemo() {
    return (
        (<div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} />
        </div>)
    );
}
export const projects = [
    {
        title: "Profile Building",
        eventImage:profileBuilding,
        description:
            "We're excited to welcome Dr. Arun Luiz T, Ph.D., for Intellexa REC’s inaugural LinkedIn Profile Building Session! 🌟 Join us on August 1 to learn from a networking guru and transform your LinkedIn profile. Get expert tips, ask your burning questions, and connect with fellow innovators. Don’t miss out!",
        link: "https://www.linkedin.com/posts/intellexa-rec_intellexarec-professionaldevelopment-linkedinprofiles-activity-7224972178981629952-UpsK?utm_source=share&utm_medium=member_desktop",
        eventStatus:"Ended",

    },
    {
        title: "Resume Building",
        eventImage:resumeBuilding,
        description:
            "Hey, future leaders! 🌟 Ready to grab the attention of top employers? Our upcoming Resume Building Session is your gateway to crafting a resume that not only lists your experiences but tells your unique story. Whether you're starting fresh or aiming to upgrade, this session will give you the tools to create a resume that makes an unforgettable impact.",
        link: "https://www.linkedin.com/posts/intellexa-rec_resumeboost-levelupyourcareer-professionalgrowth-activity-7231266474844151810-89tW?utm_source=share&utm_medium=member_desktop",
        eventStatus:"Ended",
    },
    {
        title: "Figma Fusion",
        description:
            "Join us for an exciting and informative Figma event where we dive deep into the world of UI/UX design and explore the power of Figma as a tool for designers. Whether you're a beginner or looking to enhance your skills, this event is designed to equip you with the knowledge and tools you need to excel in the design field.",
        link: "#",
        eventStatus:"Coming Soon, Stay tuned"
    },
];
