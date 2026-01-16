import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-background">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Profile Logo */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-xl shadow-[0_0_20px_rgba(0,209,255,0.3)]">
                        YR
                    </div>
                    <div className="text-2xl font-heading font-bold tracking-tighter">
                        <span className="text-primary italic uppercase">Yogesh</span>.Rawat
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { icon: Github, link: 'https://github.com/yogeshrwat', name: 'Github' },
                        { icon: Linkedin, link: 'https://linkedin.com/in/yogesh-rawt', name: 'LinkedIn' },
                        { icon: Twitter, link: '#', name: 'Twitter' },
                        { icon: Mail, link: 'mailto:yogeshrawatdev@gmail.com', name: 'Email' }
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target={social.link.startsWith('http') ? "_blank" : undefined}
                            rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="w-14 h-14 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-white/30 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                            title={social.name}
                        >
                            <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/10 font-mono">
                    Digital Craftsmanship &copy; {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
}

export default Footer
