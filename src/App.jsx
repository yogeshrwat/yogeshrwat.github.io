import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/layout/Navbar'
import ServiceBar from './components/layout/ServiceBar'
import Home from './pages/Home'
import CustomCursor from './components/ui/CustomCursor'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <Router>
            <div className="relative min-h-screen bg-background text-white selection:bg-primary selection:text-background">
                <CustomCursor />
                <ServiceBar />
                <WhatsAppButton />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
