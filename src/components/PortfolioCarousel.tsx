import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const portfolioItems = [
    {
        id: 1,
        title: "Fashwash Commercial",
        category: "Skincare Ad",
        description: "Skincare Ad (Niacinamide Bottle) showcasing product elegance.",
        image: "/assets/portfolio/niacinamide.png",
        color: "from-gray-200 to-gray-400",
        link: "https://www.canva.com/design/DAGxkdHoI9Y/4FOujOgAuHclfljfWHJ4Tw/edit"
    },
    {
        id: 2,
        title: "NIKE AIR",
        category: "Marketing Poster",
        description: "Nike SB Dunk Ad Poster. A dynamic marketing poster design.",
        image: "/assets/portfolio/nike.png",
        color: "from-pink-400 to-pink-900",
        link: "https://www.canva.com/design/DAG0uU9jkro/mo13FafxKIfOAk4bPH8xHQ/edit"
    },
    {
        id: 3,
        title: "ICED COFFEE",
        category: "Poster Design",
        description: "Vintage aesthetics for a modern coffee brand.",
        image: "/assets/portfolio/coffee.png",
        color: "from-amber-700 to-amber-900",
        link: "https://www.canva.com/design/DAGxWYcdjFU/fmn0c3a4CQ5eJoVj-CsmfQ/edit"
    },
    {
        id: 4,
        title: "BISSELL BLEND",
        category: "Branding",
        description: "Product promotion with sleek typography.",
        image: "/assets/portfolio/strawberry.jpg",
        color: "from-red-400 to-red-900",
        link: "https://www.canva.com/design/DAGw93d-4Js/0zhwRT4NCWjs2ve7ywJbaA/edit"
    },
    {
        id: 5,
        title: "Personal Brand",
        category: "Illustration",
        description: "Custom illustration card for personal identity.",
        image: "/assets/portfolio/freelance.jpg",
        color: "from-brand-pink to-brand-dark",
        link: "https://www.canva.com/design/DAGu0GeA6Cc/JFv8Vs_bnt-nEFQdC-SLzw/edit"
    }
];

const PortfolioCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };

    return (
        <section id="projects" className="py-20 bg-[#251616]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                        Portfolio <span className="text-brand-pink">Showcase</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        "Hey there! Check out my work by clicking through each carousel.
                        For the best experience, view it on desktop!"
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Carousel Display */}
                    <div className="relative aspect-video md:aspect-[21/9] bg-brand-dark rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col md:flex-row"
                            >
                                {/* Image Side */}
                                <div className="w-full md:w-2/3 h-64 md:h-full relative overflow-hidden bg-black/20 flex items-center justify-center p-4">
                                    <img
                                        src={portfolioItems[currentIndex].image}
                                        alt={portfolioItems[currentIndex].title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${portfolioItems[currentIndex].color} opacity-10 mix-blend-overlay pointer-events-none`} />
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/3 h-full bg-neutral-900/95 backdrop-blur-md p-8 flex flex-col justify-center border-l border-white/5">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="text-brand-pink text-sm tracking-wider uppercase font-bold mb-2 block">
                                            {portfolioItems[currentIndex].category}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-4 line-clamp-2">
                                            {portfolioItems[currentIndex].title}
                                        </h3>
                                        <p className="text-gray-400 mb-8 leading-relaxed">
                                            {portfolioItems[currentIndex].description}
                                        </p>
                                        <a
                                            href={portfolioItems[currentIndex].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-brand-pink transition-colors group/btn"
                                        >
                                            View Details <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-brand-pink hover:text-brand-dark text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-brand-pink hover:text-brand-dark text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {portfolioItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-brand-pink' : 'w-2 bg-gray-600 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioCarousel;
