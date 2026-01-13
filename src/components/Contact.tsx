import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-brand-dark to-black relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-24 h-24 bg-brand-pink/10 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-block p-3 bg-brand-pink/10 rounded-full mb-6 text-brand-pink">
                        <Sparkles size={24} />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-white">
                        Don't Hesitate to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-400">
                            Reach Out!
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Whether you have a project in mind, need a freelance designer, or just want to say hi—my inbox is always open.
                    </p>

                    <motion.a
                        href="mailto:arshiafreen090@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <Mail size={20} />
                        Send me an Email
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
