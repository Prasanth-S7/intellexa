"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function GuidelinesPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <HoverEffect items={guidelines} className="your-custom-class" isGuidelinePage={true} />

        </div>
    );
}

export const guidelines = [
    {
        "title": "WEB UNFOLD",
        "guidelines": [
            "Participants will get design files at the start of the event.",
            "Build a website based on the provided designs.",
            "You can use any tech stack, but no no-code tools are allowed.",
            "All work must be original plagiarism will not be tolerated.",
            "Submit your project GitHub or Drive link on the Google Form before the deadline by clicking the accept button.",
            "Assets are available in the Drive link. 📁",
            "Event Head: Jeffrin P, Phone: 6383381719. 📞"
        ],
        "driveLink": "https://drive.google.com/drive/folders/1uC_-wX379KrexKm7ACUDyxHmgB3BlYTS?usp=drive_link",
        "registerLink": "https://forms.gle/qhnrvFbupSZtQhwA7"
    },
    {
        "title": "POSTER CHALLENGE - FutureFrame",
        "guidelines": [
            "Open to 1st and 2nd-year students; individual participation only. 👩‍🎓👨‍🎓",
            "Theme: Share your tech journey.",
            "Poster size should be A3  submit as PDF, PNG, or JPEG.",
            "Content must be original templates are not allowed.",
            "Use digital tools or traditional methods for your design.",
            "Bring any necessary materials for handmade posters.",
            "Submit your project GitHub or Drive link on the Google Form before the deadline by clicking the accept button.",
            "Event Head: KaarunyaShree G, Phone: 9176072833. 📞"
        ],
        "registerLink": "https://docs.google.com/forms/d/e/1FAIpQLSeRY5cmC8xwQzeroouFSO39aUr-8AtWLC_hczgdNfsnOUeW_g/viewform?usp=sf_link"
    },
    {
        "title": "AI CHALLENGE",
        "guidelines": [
            "Receive a training dataset at the start of the competition. 🤖",
            "Create and test your models using the provided data.",
            "Models will be tested on a hidden dataset for fairness.",
            "Scoring will be based on your model's performance.",
            "Include model code, documentation, and a brief report.",
            "Submit your project GitHub or Drive link on the Google Form before the deadline by clicking the accept button.",
            "Assets are available in the Drive link. 📁",
            "Event Head: Yudeeswaran, Phone: 8925390408. 📞"
        ],"driveLink": "https://drive.google.com/your-web-unfold-assets-link",
        "registerLink": "https://forms.gle/eDFpAc52nk65SdPM8"
    },
    {
        "title": "SHE-UI: Designing with purpose",
        "guidelines": [
            "Teams must have two members. 👥",
            "Choose a problem statement to work on together.",
            "One member starts the design the other finishes it.",
            "Use any digital design tools you prefer.",
            "Bring your own laptops and necessary tools.",
            "Work together as a team without outside help.",
            "Use digital formats like Figma, Adobe XD, Sketch, PDF, or WIX Studio for your design submissions.",
            "Submit your design with a brief explanation of your approach.",
            "Event Head: Shivani.B, Phone: 8939191950. 📞"
        ],
        "registerLink": "#"
    }
];
