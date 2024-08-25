export const Footer = (() => {
    return (
        <section id="footer" className="mt-10">
            <footer className="bg-[#171717] ">
                <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                        <a
                            className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600"
                            href="#"
                        >
                            <span className="sr-only">Back to top</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <p
                                className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400"
                            >
                                Connect with us on social media for the latest updates, news, and insights
                            </p>
                            <div className="leading-relaxed text-gray-500 lg:text-left dark:text-gray-400 flex items-center justify-start mt-5 space-x-7">
                                <a className=" hover:cursor-pointer" href="https://www.instagram.com/intellexa.rec/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                                <a className="hover:cursor-pointer" href="https://www.linkedin.com/company/intellexa-rec/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>
                                
                            </div>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                        >
                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#about-us"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#team"
                                >
                                    Team
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="#footer"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                    href="/events"
                                >
                                    Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    )
})
