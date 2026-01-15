import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'top-[44px] py-4 px-4' : 'top-0 py-12 px-6'
                }`}
        >
            <div className={`container mx-auto px-10 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass-morphism rounded-full py-4 max-w-6xl' : 'bg-transparent'
                }`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-heading font-bold tracking-tighter cursor-pointer"
                >
                    <span className="text-primary italic">YOGESH</span>.RAWAT
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-16">
                    {['Home', 'Works', 'About', 'Contact'].map((item, i) => (
                        <motion.a
                            key={item}
                            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative text-[13px] font-heading font-extrabold hover:text-primary transition-colors uppercase tracking-[0.15em]"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}

                    <div className="flex items-center space-x-8 ml-8 border-l border-white/10 pl-10">
                        <motion.a
                            whileHover={{ scale: 1.25, y: -2, color: '#00D1FF' }}
                            href="#"
                            className="text-white/40 transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.25, y: -2, color: '#00D1FF' }}
                            href="mailto:rawatyogesh.dev@gmail.com"
                            className="text-white/40 transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.25, y: -2, color: '#00D1FF' }}
                            href="mailto:rawatyogesh.dev@gmail.com"
                            className="text-white/40 transition-colors"
                        >
                            <Mail size={20} />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,209,255,0.2)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white text-black text-[11px] font-heading font-extrabold uppercase tracking-widest rounded-full hover:bg-primary transition-all duration-300"
                        >
                            Let's Talk
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-morphism overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-10 space-y-6">
                            {['Home', 'Works', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-heading font-extrabold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
