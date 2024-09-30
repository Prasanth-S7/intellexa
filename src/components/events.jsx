"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import profileBuilding from "@/assets/profileBuilding.png";
import resumeBuilding from "@/assets/resumeBuilding.png";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} />
        </div>
    );
}

export const projects = [
    // {
    //     title: "Profile Building",
    //     eventImage: profileBuilding,
    //     description:
    //         "We're excited to welcome Dr. Arun Luiz T, Ph.D., for Intellexa REC’s inaugural LinkedIn Profile Building Session! 🌟 Join us on August 1 to learn from a networking guru and transform your LinkedIn profile. Get expert tips, ask your burning questions, and connect with fellow innovators. Don’t miss out!",
    //     link: "https://www.linkedin.com/posts/intellexa-rec_intellexarec-professionaldevelopment-linkedinprofiles-activity-7224972178981629952-UpsK?utm_source=share&utm_medium=member_desktop",
    //     eventStatus: "Ended",
    // },
    // {
    //     title: "Resume Building",
    //     eventImage: resumeBuilding,
    //     description:
    //         "Hey, future leaders! 🌟 Ready to grab the attention of top employers? Our upcoming Resume Building Session is your gateway to crafting a resume that not only lists your experiences but tells your unique story. Whether you're starting fresh or aiming to upgrade, this session will give you the tools to create a resume that makes an unforgettable impact.",
    //     link: "https://www.linkedin.com/posts/intellexa-rec_resumeboost-levelupyourcareer-professionalgrowth-activity-7231266474844151810-89tW?utm_source=share&utm_medium=member_desktop",
    //     eventStatus: "Ended",
    // },
    // {
    //     title: "Figma Fusion",
    //     description:
    //         "Join us for an exciting and informative Figma event where we dive deep into the world of UI/UX design and explore the power of Figma as a tool for designers. Whether you're a beginner or looking to enhance your skills, this event is designed to equip you with the knowledge and tools you need to excel in the design field.",
    //     link: "#",
    //     eventStatus: "Coming Soon, Stay tuned",
    // },
    {
        title: "AI EVENT",
        description:
            "Join us for an insightful AI event focused on model building and accuracy techniques, essential for preparing for the upcoming AI challenge. This session aims to equip participants with key skills and insights that will enhance their performance and foster innovation.",
        date: "September 30, 2024",
        venue: "Online",
        timing: "6:30 PM - 8:30 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "WORKSHOP ON REACT",
        description:
            "This workshop is designed to introduce students to the fundamentals of web development through React. The objective is to empower participants with the essential skills needed to embark on their web development careers and make a lasting impression in the industry.",
        date: "October 3-4, 2024",
        venue: "Offline (Idea Factory)",
        timing: "3:00 PM - 5:00 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "TECHTOBER CHALLENGE",
        description:
            "TECHTOBER invites REC students to participate in a week-long virtual competition featuring three key challenges: Website Recreation, AI Model Accuracy, and Poster Making. This event encourages participants to showcase their skills, compete for prizes, and develop expertise in web development, AI, and design.",
        date: "October 7-14, 2024",
        hostedBy: "INTELLEXA REC",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "INTRODUCTION TO BACKEND TECHNOLOGY",
        description:
            "This workshop provides a comprehensive introduction to backend technologies, serving as a foundational step in students' journeys toward backend development. Participants will gain a solid understanding of backend principles, enabling them to navigate backend development with confidence.",
        date: "October 11, 2024",
        venue: "Online",
        timing: "7:00 PM - 8:00 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "SESSION ON IOT",
        description:
            "This session aims to introduce students to the fundamentals of IoT, including its real-time applications and future prospects for enthusiasts in this field. Participants will also explore innovative project ideas to further their understanding of IoT.",
        date: "October 16-17, 2024",
        venue: "Offline (Idea Factory)",
        timing: "3:00 PM - 5:00 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "HANDS-ON WORKSHOP ON FLUTTER",
        description:
            "In collaboration with the Namma Flutter Community from Tamil Nadu, this hands-on workshop aims to provide participants with a solid foundation in Flutter. Students will gain practical experience in developing a basic mobile application, enhancing their skills in mobile development.",
        date: "Any Saturday in October 2024",
        venue: "Offline (Idea Factory Lab)",
        timing: "8:00 AM - 5:00 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        title: "DSA WORKSHOP",
        description:
            "This hands-on workshop focuses on mastering the fundamentals of Data Structures and Algorithms (DSA). It is ideal for students looking to enhance their problem-solving abilities and prepare effectively for technical interviews.",
        date: "October 22, 2024",
        venue: "Offline - A105",
        timing: "3:00 PM - 5:00 PM",
        eventStatus: "Upcoming",
        registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    }
];
