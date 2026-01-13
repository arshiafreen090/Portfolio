import { motion } from 'framer-motion';
import TextType from './TextType';
import GradientText from './GradientText';
import LightRays from './LightRays';


const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark px-6 pt-24 pb-12"
        >
            {/* 1. Light Rays Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FFFFFF"
                    raysSpeed={0.5}
                    lightSpread={2.0}
                    rayLength={2.0}
                    followMouse={true}
                    mouseInfluence={0.05}
                    saturation={0.2}
                />
            </div>

            {/* 2. Background Ambient Depth */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">

                {/* Initial Fade-in Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center w-full"
                >
                    {/* 1. Intro Label with TextType effect */}
                    <div className="text-brand-pink/70 font-medium tracking-[0.5em] mb-8 text-xs md:text-sm uppercase min-h-[1.5em]">
                        <TextType
                            text={["Hey, I’m AFREEN", "A Visual Storyteller", "Creative Designer"]}
                            typingSpeed={100}
                            deletingSpeed={50}
                            pauseDuration={2000}
                            cursorCharacter="_"
                            cursorClassName="text-brand-pink"
                        />
                    </div>

                    {/* 2. Central Hero Image */}
                    <div className="relative w-full max-w-3xl h-[45vh] md:h-[60vh] flex justify-center items-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.5 }}
                            transition={{ delay: 0.1, duration: 1.2, ease: "circOut" }}
                            className="relative z-10 w-full h-full flex justify-center"
                        >
                            <img
                                src="/assets/front.png"
                                alt="Afreen Portrait"
                                className="w-auto h-full object-contain filter drop-shadow-[0_20px_50px_rgba(255,179,217,0.15)]"
                            />
                        </motion.div>
                    </div>

                    {/* 3. Branding Typography */}
                    <div className="space-y-4 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <GradientText
                                colors={["#FFB3D9", "#FF9FFC", "#B19EEF", "#FFB3D9"]}
                                animationSpeed={5}
                                showBorder={false}
                                className="text-5xl md:text-8xl font-bold font-heading leading-tight italic"
                            >
                                Graphic Designer
                            </GradientText>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-[0.4em] pt-4"
                        >
                            This is my first portfolio website
                        </motion.p>
                    </div>

                    {/* 4. Minimal Scroll Down Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-16 flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-pink/50 font-bold">Scroll Down</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="w-[1px] h-12 bg-gradient-to-b from-brand-pink/40 to-transparent"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
