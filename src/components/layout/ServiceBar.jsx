import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const ServiceBar = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 100px
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-0 left-0 w-full z-[100] bg-primary py-1 px-6"
                >
                    <div className="container mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 overflow-hidden">
                            <Sparkles size={12} className="text-background animate-pulse flex-shrink-0" />
                            <span className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-tight text-background truncate">
                                Providing freelance services
                            </span>
                        </div>

                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-4 py-1 rounded-full bg-background text-primary text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-tight hover:bg-white hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                        >
                            Request Services
                            <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ServiceBar
