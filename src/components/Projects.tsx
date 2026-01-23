"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, categories } from "@/data/projectsData";
import Image from "next/image";

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="relative py-4 bg-grid">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent" />
            <div className="bg-text top-20 left-0 w-full text-center">PROJECTS</div>

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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                        I like to apply my skills and knowledge to make something meaningful.
                        It makes me more inclined to learn, and these are some of my projects.
                    </p>
                    <a
                        href="https://github.com/yogeshrwat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Profile
                    </a>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-3 mb-6"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`tab-button ${activeCategory === category.id ? "active" : ""
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-3 gap-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group glass-effect rounded-2xl overflow-hidden card-hover"
                            >
                                {/* Project Image */}
                                <div className="project-image-container aspect-video relative group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Project Info */}
                                <div className="p-2.5 md:p-4 space-y-2 md:space-y-4">
                                    <h3 className="text-sm md:text-xl font-semibold group-hover:text-purple-400 transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-[10px] md:text-sm line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1 md:gap-2">
                                        {project.technologies.slice(0, 2).map((tech) => (
                                            <span key={tech} className="px-1.5 py-0.5 bg-tertiary text-secondary text-[8px] md:text-xs rounded-full whitespace-nowrap">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 2 && (
                                            <span className="px-1.5 py-0.5 bg-tertiary text-secondary text-[8px] md:text-xs rounded-full whitespace-nowrap">
                                                +{project.technologies.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 pt-1 md:pt-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] md:text-sm font-medium hover:bg-purple-500/20 transition-colors"
                                        >
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Demo
                                        </a>
                                        {project.sourceUrl && (
                                            <a
                                                href={project.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-gray-700 text-gray-400 text-[10px] md:text-sm font-medium hover:border-gray-600 hover:text-gray-300 transition-colors"
                                            >
                                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
