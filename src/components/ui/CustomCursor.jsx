import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
            style={{
                x: x,
                y: y,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <div className="w-1 h-1 bg-primary rounded-full" />
        </motion.div>
    )
}

export default CustomCursor
