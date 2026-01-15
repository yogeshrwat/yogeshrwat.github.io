import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Github, Linkedin, Twitter, Globe } from 'lucide-react'

const ContactSection = () => {
    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="text-7xl md:text-[12rem] font-heading font-bold mb-16 tracking-tighter leading-[0.8] uppercase"
                    >
                        BE NEXT <br />
                        <span className="text-gradient">GEN</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <p className="text-white/40 text-xl font-body leading-relaxed mb-16">
                            Currently accepting new projects and creative collaborations. If you're looking for a partner to elevate your digital presence, say hello.
                        </p>

                        <a
                            href="mailto:rawatyogesh.dev@gmail.com"
                            className="group relative inline-flex items-center gap-6 px-16 py-8 bg-white text-black font-heading font-bold text-2xl uppercase tracking-tighter overflow-hidden transition-all duration-500 hover:scale-105"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-white">Start Project</span>
                            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-3 group-hover:text-white" />
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </a>
                    </motion.div>

                    {/* Social Links Grid */}
                    <div className="mt-32 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                        {[
                            { name: 'Github', icon: Github, link: '#' },
                            { name: 'LinkedIn', icon: Linkedin, link: '#' },
                            { name: 'Twitter', icon: Twitter, link: '#' },
                            { name: 'Portfolio', icon: Globe, link: '#' }
                        ].map((social, i) => (
                            <motion.a
                                key={social.name}
                                href={social.link}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                                viewport={{ once: true }}
                                className="group flex flex-col items-center gap-4 p-8 border border-white/5 bg-white/2 backdrop-blur-sm rounded-3xl hover:border-primary/50 transition-all duration-500"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors duration-500">
                                    <social.icon size={20} />
                                </div>
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                                    {social.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Marquee Text */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
                <div className="whitespace-nowrap text-[20rem] font-heading font-bold leading-none animate-float">
                    CONTACT CONTACT CONTACT CONTACT
                </div>
            </div>
        </section>
    )
}

export default ContactSection
