import React from 'react'
import Hero from '../components/sections/Hero'
import ProjectSection from '../components/sections/ProjectSection'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            <Hero />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Home
