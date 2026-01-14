import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Freelancing', href: '#services' },
        { name: 'Contact Me', href: '#contact' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-md shadow-lg py-4"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-heading tracking-wide text-white hover:text-brand-pink transition-colors">
                    Afreen
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white hover:text-brand-pink transition-colors relative group font-sans"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    className="md:hidden text-white hover:text-brand-pink transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="md:hidden bg-gradient-to-b from-brand-dark/95 via-brand-dark/90 to-brand-dark/95 backdrop-blur-xl border-t border-brand-pink/30 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white relative group px-6 py-3 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -50, y: -20 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                                    whileHover={{ 
                                        scale: 1.15, 
                                        backgroundColor: 'rgba(236, 72, 153, 0.2)',
                                        boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                                        color: '#ec4899'
                                    }}
                                    whileTap={{ scale: 0.9, backgroundColor: 'rgba(236, 72, 153, 0.4)' }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        {link.name}
                                    </motion.span>
                                    <motion.span 
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-pink to-transparent"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
