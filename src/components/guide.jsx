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
            "Participants will receive design files and assets at the beginning of the event.",
            "Each participant must build a website based on the provided designs.",
            "Participants are required to push their completed projects to GitHub before the end date.",
            "A Google Form will be provided for participants to submit their GitHub repository link.",
            "Any tech stack can be used, but the use of no-code tools is strictly prohibited.",
            "Plagiarism is strictly prohibited; all work must be original.",
            "Participants must ensure that their submissions comply with all guidelines to qualify for evaluation.",
            "For any clarifications, please contact the event head: [Event Head Name] at [Event Head Email].",

        ]
    }
    ,
    {
       "title": "POSTER CHALLENGE - FutureFrame",
        "guidelines": [
            "Open to 1st and 2nd-year students. Individual participation is required.",
            "Theme: Crafting your tech journey.",
            "Poster size should be A3, and digital formats accepted are PDF, PNG, or JPEG with a minimum resolution of 300 DPI.",
            "Content must be original; the use of templates is prohibited, but online design tools (Canva, Figma, etc.) are allowed.",
            "Submit via [gform] by the end of the event. Late submissions will not be accepted.",
            "Participants must submit original poster designs based on the given theme.",
            "All designs should be submitted in high-resolution format.",
            "A Google Form will be provided for participants to upload their posters.",
            "The use of digital tools for design is encouraged, but traditional methods are also welcome.",
            "Handmade posters are also accepted! Please bring necessary materials like laps and poster-making kits as per your requirements",
            "Plagiarism is strictly prohibited all work must be original.",
            "For any clarifications, please contact the event head: KaarunyaShree G at 221001065@rajalakshmi.edu.in."
        ] 
    }
,    
    {
        "title": "AI CHALLENGE",
        "guidelines": [
            "Participants will receive the training dataset at the start of the competition.",
            "Develop your models and validate them on a subset of the training data.",
            "Submit your models and reports by the deadline; no access to the test dataset during development.",
            "Models will be tested on a hidden test dataset to ensure fairness and prevent overfitting.",
            "Each submission will be scored based on the evaluation criteria, with overall scores calculated to rank participants.",
            "Submissions should include model code, documentation or a README file explaining the steps and model design, a final trained model file (if applicable), and a brief report (2-3 pages) outlining the techniques used and key findings.",
            "Ensure that your model and code are submitted before the communicated deadline.",
            "The overall score will be calculated with 40% weightage on training accuracy and 60% weightage on hidden test dataset performance, using the formula: Final Score = (0.40 × Training Accuracy) + (0.60 × Hidden Test Performance).",
            "For any clarifications, please contact the event head:Yudeeswaran at 221501182@rajalakshmi.edu.in."
        ]
    }
   ,
   {
    "title": "SHE-UI: Designing with purpose",
    "guidelines": [
        "Teams must consist of two members.",
        "Randomly select a problem statement to work on.",
        "One member will start the design, and the other will complete it.",
        "Use digital formats such as Figma, Adobe XD, Sketch, PDF, WIX Studio, etc.",
        "Submission deadline is October 14th, 2024, by 11:59 PM.",
        "Bring your own laptops and tools to the event.",
        "Work effectively as a team and collaborate well.",
        "No external help or assistance is allowed during the event.",
        "Submit designs digitally along with a brief description of your approach.",
        "Exciting prizes will be awarded to top teams based on creativity and teamwork.",
        "Plagiarism is strictly prohibited all work must be original.",
        "For any clarifications, please contact the event head: [Event Head Name] at [Event Head Email]."
    ]
}

];
