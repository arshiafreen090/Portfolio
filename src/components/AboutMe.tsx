import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="about" className="py-20 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">

                        {/* Left Column: Title */}
                        <div className="md:w-1/3">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                                About <span className="text-brand-pink">Me</span>
                            </h2>
                            <div className="w-20 h-1 bg-brand-pink rounded-full mb-6"></div>
                            <p className="text-gray-400 text-sm italic">
                                Engineering Student & Creative Designer based in Lucknow, India.
                            </p>

                            {/* Pixel Image Repositioned */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mt-8 relative w-48 h-48 rounded-xl overflow-hidden shadow-lg border border-white/10 opacity-50 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src="/assets/pixel.jpg"
                                    alt="Decorative Pixel Art"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="md:w-2/3 space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                Hi! I'm <strong className="text-white">Afreen Aurshi</strong>, currently studying Engineering at Lucknow University.
                                My journey sits at the intersection of <span className="text-brand-pink">Visual Design</span> and <span className="text-brand-pink">Technology</span>.
                            </p>

                            <p>
                                I don't just design for looks; I design for impact. Whether it's crafting a brand identity in Figma,
                                automating tasks with Python, or building immersive web experiences, I love bringing ideas to life.
                            </p>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
                                <h3 className="text-xl font-bold text-white mb-2">My Design Philosophy</h3>
                                <p className="text-sm text-gray-400">
                                    "Playful yet professional." I believe digital spaces should feel alive.
                                    My work often features organic shapes, vibrant gradients, and a touch of personality (and yes, I love cats 🐱).
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 hover:border-brand-pink transition-colors">
                                    Engineering Student
                                </span>
                                <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 hover:border-brand-pink transition-colors">
                                    Creative
                                </span>
                                <span className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 hover:border-brand-pink transition-colors">
                                    Tech Enthusiast
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;
