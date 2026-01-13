import { motion } from 'framer-motion';

const skills = [
    "Graphic Design",
    "Figma",
    "Canva",
    "Web Development",
    "SEO/UX",
    "Wire framing",
    "UI/UX",
    "Presentation",
    "Communication"
];

const Skills = () => {
    return (
        <section className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold font-heading mb-12 text-white"
                >
                    My <span className="text-brand-pink">Skills</span> & Tech Stack
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 179, 217, 0.2)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium cursor-default transition-colors hover:border-brand-pink"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
