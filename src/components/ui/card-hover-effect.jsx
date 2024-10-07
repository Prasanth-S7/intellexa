import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn("text-[#9966CC] font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};


export const HoverEffect = ({ items, className, isGuidelinePage }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10", className)}>
            {items.map((item, idx) => (
                <div
                    key={item?.title}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >

                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.3 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.3, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>


                    <Card>
                        {isGuidelinePage ? (
                            <>
                                <CardTitle className="text-2xl font-semibold mb-4">{item.title}</CardTitle>
                                <div className="mt-6 space-y-3">
                                    {item.guidelines && item.guidelines.length > 0 ? (
                                        <div className="space-y-2">
                                            {item.guidelines.map((guideline, index) => (
                                                <div key={index} className="flex items-start space-x-2">
                                                    <span className="text-lg font-medium text-purple-600">•</span>
                                                    <p className="text-sm text-white-700">{guideline}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-white-500">No guidelines available.</p>
                                    )}
                                    {item.driveLink && (
                                        <p className="mt-4 text-sm text-white-700">
                                            Drive Link: <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.driveLink}</a>
                                        </p>
                                    )}
                                </div>
                                {item.registerLink && (
                                    <div className="flex justify-center space-x-6 mt-4">
                                        <a
                                            href={item.registerLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="uiverse"
                                        >
                                            <div className="wrapper flex items-center justify-center space-x-2 relative">
                                                <div>
                                                    <span>Accept</span>
                                                    <div className="circle circle-12"></div>
                                                    <div className="circle circle-11"></div>
                                                    <div className="circle circle-10"></div>
                                                    <div className="circle circle-9"></div>
                                                    <div className="circle circle-8"></div>
                                                    <div className="circle circle-7"></div>
                                                    <div className="circle circle-6"></div>
                                                    <div className="circle circle-5"></div>
                                                    <div className="circle circle-4"></div>
                                                    <div className="circle circle-3"></div>
                                                    <div className="circle circle-2"></div>
                                                    <div className="circle circle-1"></div>
                                                </div>
                                            </div>
                                        </a>
                                        {item.title == "AI CHALLENGE" && (
                                            <a
                                                href="https://forms.gle/wWkLzMg4GZd63EDP9"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="uiverse"
                                            >
                                                <div className="wrapper flex items-center justify-center space-x-2 relative">
                                                    <div>
                                                        <span>Submit</span>
                                                        <div className="circle circle-12"></div>
                                                        <div className="circle circle-11"></div>
                                                        <div className="circle circle-10"></div>
                                                        <div className="circle circle-9"></div>
                                                        <div className="circle circle-8"></div>
                                                        <div className="circle circle-7"></div>
                                                        <div className="circle circle-6"></div>
                                                        <div className="circle circle-5"></div>
                                                        <div className="circle circle-4"></div>
                                                        <div className="circle circle-3"></div>
                                                        <div className="circle circle-2"></div>
                                                        <div className="circle circle-1"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                        }
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                {item.eventImage && (
                                    <Image
                                        src={item.eventImage}
                                        alt="Event Image"
                                        width={500}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                )}
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                                <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                                    Event Status: {item.eventStatus}
                                </p>

                                <div className="mt-4 text-zinc-200">
                                    {idx === 3 ? (
                                        <>
                                            <p className="text-sm"><strong>Date:</strong> {item.date}</p>
                                            <p className="text-sm"><strong>Venue:</strong> {item.venue}</p>
                                            <p className="text-sm"><strong>Time:</strong> {item.timing}</p>
                                            <a href="/guideline" className="inline-block mt-4 text-purple-600 hover:text-purple-800 font-semibold">
                                                Click here for more detail
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            {idx < 3 ? (
                                                <>
                                                    <p className="text-sm"><strong>Start Date:</strong> {item.startDate}</p>
                                                    <p className="text-sm"><strong>End Date:</strong> {item.endDate}</p>
                                                    <a href="/guideline" className="inline-block mt-4 text-purple-600 hover:text-purple-800 font-semibold">
                                                        Click here for more details
                                                    </a>
                                                    <p className="text-sm mt-3"><strong>Accept the Challenge by clicking the button below 👇</strong></p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-sm"><strong>Date:</strong> {item.date}</p>
                                                    <p className="text-sm"><strong>Venue:</strong> {item.venue}</p>
                                                    <p className="text-sm"><strong>Time:</strong> {item.timing}</p>
                                                </>
                                            )}
                                        </>
                                    )}

                                    {item.registerLink && (
                                        <div className="flex justify-center mt-4">
                                            <a
                                                href={idx < 4 ? item.registerLink : "#"}
                                                target={idx < 4 ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="uiverse"
                                            >
                                                <div className="wrapper flex items-center justify-center space-x-2 relative">
                                                    <span>{idx < 3 ? "Accept" : "Register"}</span>
                                                    <div className="circle circle-12"></div>
                                                    <div className="circle circle-11"></div>
                                                    <div className="circle circle-10"></div>
                                                    <div className="circle circle-9"></div>
                                                    <div className="circle circle-8"></div>
                                                    <div className="circle circle-7"></div>
                                                    <div className="circle circle-6"></div>
                                                    <div className="circle circle-5"></div>
                                                    <div className="circle circle-4"></div>
                                                    <div className="circle circle-3"></div>
                                                    <div className="circle circle-2"></div>
                                                    <div className="circle circle-1"></div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </Card>
                </div>
            ))}
        </div>
    );
};
