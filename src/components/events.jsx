"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import profileBuilding from "@/assets/profileBuilding.png";
import resumeBuilding from "@/assets/resumeBuilding.png";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} className="your-custom-class" isGuidelinePage={false} />

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
    // {
    //     title: "AI EVENT",
    //     description:
    //         "Join us for an insightful AI event focused on model building and accuracy techniques, essential for preparing for the upcoming AI challenge. This session aims to equip participants with key skills and insights that will enhance their performance and foster innovation.",
    //     date: "September 30, 2024",
    //     venue: "Online",
    //     timing: "6:30 PM - 8:30 PM",
    //     eventStatus: "Upcoming",
    //     registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    // },
    // {
    //     title: "WORKSHOP ON REACT",
    //     description:
    //         "This workshop is designed to introduce students to the fundamentals of web development through React. The objective is to empower participants with the essential skills needed to embark on their web development careers and make a lasting impression in the industry.",
    //     date: "October 3-4, 2024",
    //     venue: "Offline (Idea Factory)",
    //     timing: "3:00 PM - 5:00 PM",
    //     eventStatus: "Upcoming",
    //     registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    // },
    {
        title: "RE@CT REMIX",
        description:
            "🌐 Re@ct Remix is an exciting online event for web development enthusiasts to showcase their skills and creativity. Participants will transform provided design files into fully functional websites, emphasizing technical proficiency, originality, and collaboration within the web development community. 💻🎨",
        startDate: "7th Oct",
        endDate: "14th Oct",
        eventStatus: "Active",
        registerLink: "https://forms.gle/qhnrvFbupSZtQhwA7",
    },
    {
        title: "POSTER MAKING - FutureFrame",
        description:
            "🎨 Future Frame is a creative poster challenge for 1st and 2nd-year students to showcase their tech journey through original designs. 🖌️ Create impactful posters that reflect innovation, creativity, and personal growth in the tech world. 🌟",
        startDate: "7th Oct",
        endDate: "14th Oct",
        eventStatus: "Active",
        registerLink: "https://forms.gle/p6ux9eC8R4XE1MbE7",
    },
    {
        title: "ACCURACY ARENA",
        description:
            "🤖 The Accuracy Arena is a competition where participants develop machine learning models using a provided training dataset. 🧠 Teams will validate their models and submit their code and reports by the deadline. Models will be tested on a hidden dataset for fairness, and scoring will be based on performance. 🏆 Follow the submission guidelines to compete successfully! 🚀",
        startDate: "7th Oct",
        endDate: "14th Oct",
        eventStatus: "Active",
        registerLink: "https://forms.gle/eDFpAc52nk65SdPM8",
    },
    {
        title: "UI/UX RELAY: Designing with purpose",
        description:
            "👩‍💻 Join the UI/UX Relay for an exciting design challenge! Teams of two will collaborate to solve design problems in a relay format, creating innovative and visually stunning solutions while showcasing creativity, teamwork, and design skills. 🎨💡",
        date: "7th to 14th October 2024",
        venue: "Offline",
        timing: "TBD",
        eventStatus: "Registration open",
        registerLink: "https://forms.gle/oDzzVB6ZiEDkdnbW6",
    },
    {
        title: "SESSION ON IOT",
        description:
            "🌐 This session aims to introduce students to the fundamentals of IoT, including its real-time applications and future prospects for enthusiasts in this field. 🔌 Participants will also explore innovative project ideas to further their understanding of IoT. 💡",
        date: "TBD",
        venue: "Offline (Idea Factory)",
        timing: "3:00 PM - 5:00 PM",
        eventStatus: "Registration Coming Soon",
        registerLink: "#",
    },
    {
        title: "HANDS-ON WORKSHOP ON FLUTTER",
        description:
            "📱 In collaboration with the Namma Flutter Community from Tamil Nadu, this hands-on workshop aims to provide participants with a solid foundation in Flutter. 🚀 Students will gain practical experience in developing a basic mobile application, enhancing their skills in mobile development. 💻📱",
        date: "TDB",
        venue: "Offline (Idea Factory Lab)",
        timing: "8:00 AM - 5:00 PM",
        eventStatus: "Registration Coming Soon",
        registerLink: "#"
    },
    {
        title: "DSA WORKSHOP",
        description:
            "💻 This hands-on workshop focuses on mastering the fundamentals of Data Structures and Algorithms (DSA). 📊 It is ideal for students looking to enhance their problem-solving abilities and prepare effectively for technical interviews. 🔍",
        date: "TBD",
        venue: "Offline - A105",
        timing: "3:00 PM - 5:00 PM",
        eventStatus: "Registration Coming Soon",
        registerLink: "#"
    }
]    