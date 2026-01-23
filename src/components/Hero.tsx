"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-4 pb-12 flex items-center relative overflow-hidden bg-grid"
        >
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Badge restored to left column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full max-w-[600px] h-32 md:max-w-[1000px] md:h-48 mb-6"
                        >
                            <Image
                                src="/images/devlb.png"
                                alt="Software Developer"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base md:text-lg text-gray-400 font-normal leading-relaxed tracking-normal max-w-xl font-sans -mt-6"
                        >
                            I am a skilled frontend developer from India, having expertise in <span className="text-white font-medium bracket-base bracket-pink mx-1">JavaScript</span>, <span className="text-white font-medium bracket-base bracket-cyan mx-1">React</span>, <span className="text-white font-medium bracket-base bracket-pink mx-1">Flutter</span>, <span className="text-white font-medium bracket-base bracket-cyan mx-1">Next.js</span>, <span className="text-white font-medium bracket-base bracket-pink mx-1">Git</span>, and <span className="text-white font-medium bracket-base bracket-cyan mx-1">Tailwind CSS</span>.
                            I'm also familiar with <span className="text-white font-medium bracket-base bracket-pink mx-1">NodeJS</span>, <span className="text-white font-medium bracket-base bracket-cyan mx-1">TypeScript</span>, <span className="text-white font-medium bracket-base bracket-pink mx-1">Redux</span>, <span className="text-white font-medium bracket-base bracket-cyan mx-1">Rest API</span>, <span className="text-white font-medium bracket-base bracket-pink mx-1">Styled Components</span>, <span className="text-white font-medium bracket-base bracket-cyan mx-1">Bootstrap</span>, and many other libraries.
                            I can create responsive, fast, and user-friendly web apps. I am passionate about web technologies and web apps.
                            I have experience of working with several startups, and currently I am working as a freelance web developer in a company.
                        </motion.div>

                        {/* Skills Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-2 justify-center lg:justify-start mt-8"
                        >
                            {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"].map(
                                (skill) => (
                                    <span key={skill} className="tech-tag">
                                        {skill}
                                    </span>
                                )
                            )}
                        </motion.div>

                        {/* Resume Link */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center lg:justify-start mt-8"
                        >
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="group flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors text-lg"
                            >
                                View My Resume
                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center items-center mt-12 lg:mt-0"
                    >
                        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                            {/* Floating Animation */}
                            <motion.div
                                animate={{
                                    y: [-20, 20, -20],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <Image
                                    src="/images/3d-image.png"
                                    alt="3D Character"
                                    width={500}
                                    height={500}
                                    className="relative z-10 object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] mix-blend-screen brightness-110 contrast-110"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-24 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-sm">Scroll Down</span>
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
