import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/91XXXXXXXXXX" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] cursor-pointer group"
        >
            <MessageCircle size={32} fill="currentColor" />

            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                Chat with me
            </div>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        </motion.a>
    )
}

export default WhatsAppButton
