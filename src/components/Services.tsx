import { motion } from 'framer-motion';
import { ArrowRight, PenTool, Edit3 } from 'lucide-react';

const services = [
    {
        title: "Design & Visual Creativity",
        icon: <PenTool className="text-brand-pink" size={32} />,
        items: [
            "Figma UI Layouts & Visual Designs",
            "Poster & Flyer Design",
            "Social Media Graphics",
            "Brand Identity Essentials",
            "Product Mockups",
            "Canva Presentations"
        ]
    },
    {
        title: "Writing & Digital Content",
        icon: <Edit3 className="text-brand-pink" size={32} />,
        items: [
            "Content Writing",
            "SEO-Friendly Blog Posts",
            "Social Media Captions",
            "Engaging Creative Writing",
            "Product/Poster Descriptions"
        ]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        What I <span className="text-brand-pink">Do</span>
                    </h2>
                    <p className="text-gray-400">Services tailored to your creative needs.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#2D1B1B] border border-white/5 p-8 rounded-3xl hover:border-brand-pink/30 hover:shadow-[0_0_30px_rgba(255,179,217,0.05)] transition-all group"
                        >
                            <div className="bg-brand-pink/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 font-heading">{service.title}</h3>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Freelance CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#3a1d2e] to-brand-dark rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden max-w-4xl mx-auto"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
                        Ready to start a project?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
                        I also work as a Freelancer on Fiverr. Feel free to explore and check out my work, projects, and offerings.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <a
                            href="https://www.fiverr.com/afreen_creates_/design-professional-canva-graphics-adce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                        >
                            Graphic Design Gig <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://www.fiverr.com/afreen_creates_/write-engaging-content-or-design-simple-eyecatching-posters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                        >
                            SEO Blog Gig <ArrowRight size={18} />
                        </a>
                    </div>

                </motion.div>
            </div >
        </section >
    );
};

export default Services;
