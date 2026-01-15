import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../data/projectsData'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={cardRef}
            className="group relative flex flex-col gap-8 mb-32 md:mb-56 odd:md:mt-32"
        >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-white/5 cursor-pointer">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-background scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <ArrowUpRight size={40} />
                    </div>
                </div>

                {/* Project Number */}
                <div className="absolute top-8 left-8 text-white/20 font-heading text-8xl font-bold italic select-none">
                    0{index + 1}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-4">
                <div className="max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">{project.category}</span>
                        <div className="h-[1px] w-12 bg-primary/30" />
                    </div>
                    <h3 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tighter group-hover:text-primary transition-colors duration-500">
                        {project.title}
                    </h3>
                    <p className="text-white/40 font-body text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 md:justify-end max-w-xs">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:border-primary/30 group-hover:text-white transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProjectSection = () => {
    const sectionRef = useRef(null)

    return (
        <section ref={sectionRef} id="works" className="py-32 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.4em]">Featured Showcase</span>
                        <h2 className="text-6xl md:text-9xl font-heading font-bold tracking-tighter">
                            BENDING <br />
                            <span className="text-gradient">REALITY</span>
                        </h2>
                    </motion.div>

                    <div className="absolute top-0 right-0 hidden lg:block w-px h-64 bg-gradient-to-b from-primary to-transparent opacity-20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-6 border border-white/10 rounded-full font-heading font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                    >
                        View More Projects
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
