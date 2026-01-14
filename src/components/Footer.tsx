import { Github, Linkedin, Mail, Command, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading text-white mb-2">Afreen Aurshi</h3>
                        <p className="text-gray-500 text-sm">
                            © 2026 Afreen Aurshi. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                            Designed & Developed by Afreen | Figma
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <a href="#home" className="hover:text-brand-pink transition-colors">Home</a>
                        <a href="#projects" className="hover:text-brand-pink transition-colors">Projects</a>
                        <a href="#services" className="hover:text-brand-pink transition-colors">Freelancing</a>
                        <a href="#contact" className="hover:text-brand-pink transition-colors">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="mailto:arshiafreen090@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-brand-pink hover:text-brand-dark text-white transition-all transform hover:-translate-y-1">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/afreen-aurshi-60477b331/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-pink hover:text-brand-dark text-white transition-all transform hover:-translate-y-1">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/afreenaurshi" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-pink hover:text-brand-dark text-white transition-all transform hover:-translate-y-1">
                            <Twitter size={20} />
                        </a>
                        <a href="https://github.com/arshiafreen090" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-pink hover:text-brand-dark text-white transition-all transform hover:-translate-y-1">
                            <Github size={20} />
                        </a>
                        <a href="https://www.fiverr.com/afreen_creates_?public_mode=true" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-brand-pink hover:text-brand-dark text-white transition-all transform hover:-translate-y-1">
                            <Command size={20} /> {/* Placeholder replaced with Fiverr */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
