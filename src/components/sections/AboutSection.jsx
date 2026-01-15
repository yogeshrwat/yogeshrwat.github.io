import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Globe2, Cpu } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SkillCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="p-8 border border-white/10 glass-morphism rounded-2xl flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
    >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-heading font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed font-body">
            {description}
        </p>
    </motion.div>
)

const AboutSection = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top bottom-=100",
                }
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} id="about" className="py-32 bg-background overflow-hidden relative">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <span className="reveal-text inline-block text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6">The Story So Far</span>
                        <h2 className="reveal-text text-6xl md:text-8xl font-heading font-bold mb-10 tracking-tighter leading-none">
                            ENGINEERING <br />
                            <span className="text-white/20 italic">EMOTION</span>
                        </h2>
                        <div className="reveal-text space-y-8 text-white/50 text-xl font-body max-w-xl leading-relaxed">
                            <p>
                                I am Yogesh Rawat, a Creative Developer dedicated to pushing the boundaries of what's possible on the web. I don't just build websites; I craft digital artifacts that marry technical precision with artistic intent.
                            </p>
                            <p>
                                My approach is rooted in the belief that every pixel should serve a purpose and every interaction should feel like magic.
                            </p>
                        </div>

                        <div className="reveal-text mt-16 flex gap-12">
                            <div>
                                <div className="text-5xl font-heading font-bold text-white tracking-tighter">20+</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono mt-2">Premium Tools</div>
                            </div>
                            <div>
                                <div className="text-5xl font-heading font-bold text-white tracking-tighter">100%</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono mt-2">Precision Focus</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                        <SkillCard
                            index={0}
                            icon={Code2}
                            title="Creative Dev"
                            description="Mastering GSAP, Framer Motion, and Three.js for immersive UI."
                        />
                        <SkillCard
                            index={1}
                            icon={Palette}
                            title="Interface Design"
                            description="Crafting high-fidelity prototypes and scalable design systems."
                        />
                        <SkillCard
                            index={2}
                            icon={Globe2}
                            title="Architecture"
                            description="Building robust, high-performance applications with React & Vite."
                        />
                        <SkillCard
                            index={3}
                            icon={Cpu}
                            title="Logic & Math"
                            description="Solving complex problems with elegant, efficient algorithms."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
