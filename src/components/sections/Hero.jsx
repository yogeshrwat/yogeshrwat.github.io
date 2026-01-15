import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const videoRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(videoRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[140%] object-cover opacity-60 scale-110"
                >
                    <source src="/assets/hero-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                {/* Repositioned Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-0 right-6 hidden lg:block"
                >
                    <span className="relative inline-block px-8 py-3 rounded-full overflow-hidden group">
                        {/* Animated Rainbow Border + Glow */}
                        <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-spin-slow opacity-90 group-hover:opacity-100" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 blur-md opacity-40 animate-pulse" />

                        {/* Inner Content */}
                        <span className="relative z-10 flex items-center justify-center px-6 py-2 rounded-full bg-black/90 backdrop-blur-3xl border border-white/20 shadow-[0_0_30px_rgba(0,209,255,0.2)]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent font-mono text-sm font-black uppercase tracking-[0.4em] drop-shadow-[0_0_8px_rgba(0,209,255,0.5)]">
                                Creative Developer & Designer
                            </span>
                        </span>
                    </span>
                </motion.div>

                <div className="max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-9xl lg:text-[10rem] font-heading font-bold leading-[0.85] mb-8 tracking-tighter"
                    >
                        EYE FOR <br />
                        <span className="text-gradient">DETAIL</span>
                    </motion.h1>

                    <div className="flex flex-col md:flex-row md:items-end gap-8 mt-12">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-lg md:text-xl text-white/50 max-w-md font-body leading-relaxed"
                        >
                            Yogesh Rawat craftsmen experiences where design meets precision. Building museum-quality interfaces for next-gen digital brands.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex gap-4"
                        >
                            <button className="group relative px-8 py-4 bg-primary text-background font-bold uppercase tracking-widest overflow-hidden">
                                <span className="relative z-10">See My Work</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    )
}

export default Hero
