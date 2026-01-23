"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experienceData";

export default function WorkExperience() {
    return (
        <section id="work" className="relative py-4 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
            <div className="bg-text top-20 right-0 opacity-[0.02]">EXPERIENCE</div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My professional journey building impactful web applications
                        and contributing to innovative startups.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent transform md:-translate-x-1/2" />

                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-4 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0f] transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50" />

                            {/* Date Badge - Mobile */}
                            <div className="ml-8 md:hidden">
                                <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-500/10 border border-purple-500/30 text-purple-400">
                                    {experience.duration}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-effect rounded-2xl p-4 card-hover"
                                >
                                    {/* Current Badge */}
                                    {experience.current && (
                                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            <span className="text-xs font-medium text-green-400">Currently Working</span>
                                        </div>
                                    )}

                                    {/* Role */}
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {experience.role}
                                    </h3>

                                    {/* Company */}
                                    <a
                                        href={experience.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        {experience.company}
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>

                                    {/* Duration - Desktop */}
                                    <div className="hidden md:block mb-4">
                                        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300">
                                            {experience.duration}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-3">
                                        {experience.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex gap-3 text-gray-400 text-sm">
                                                <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
